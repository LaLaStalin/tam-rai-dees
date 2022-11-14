import React, { useState } from "react";
import { ContainerLogin, WrapperLogin } from "./login.styled";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { ButtonPrimary } from "../../components/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@material-ui/core";
import { AuthContext } from "../../util/context";
import axios from "axios";
import Swal from "sweetalert2";

export const TopicHeaderAuth = (props) => {
  return (
    <>
      <div className="login-wrapper-left">
        <h1>
          {props.type} to
          <br />
          Kin Rai Dee
        </h1>

        <p>
          ถ้าคุณ{props.isHave} <br />
          สามารถ{" "}
          <Link to={props.path}>
            <span className="link-register-login">{props.linkName}!</span>
          </Link>
        </p>
      </div>
    </>
  );
};

const Login = (props) => {
  document.title = "Kin Rai Dee - Login";

  const { setUser, apiUrl } = AuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onSubmit = (values) => {
    axios
      .post(`${apiUrl}/auth/login.php`, {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        if (res.data.dataUser) {
          setUser(res.data.dataUser);
          localStorage.setItem(
            "user_setup",
            JSON.stringify(res.data.dataUser.user_id)
          );
          if (res.data.dataUser.user_urole === "A") navigate("/admin");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            text: "เข้าสู่ระบบAdminสำเร็จ><",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            text: "เข้าสู่ระบบสำเร็จ><",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "เข้าสู่ระบบ",
            text: "email or password is wrong.",
          });
        }
      });
  };

  const validateForm = (values) => {
    const err = {};
    if (!values.email) err.email = "กรุณากรอกอีเมล";
    if (!values.password) err.password = "กรุณากรอกรหัสผ่าน";

    return err;
  };
  return (
    <ContainerLogin>
      <WrapperLogin path={location.pathname}>
        <TopicHeaderAuth
          type="Sign In"
          isHave="ยังไม่มีบัญชี"
          path="/register"
          linkName="ลงทะเบียนได้ที่นี่"
        />
        <Form
          onSubmit={onSubmit}
          validate={validateForm}
          render={({ handleSubmit, form, submitting, submitError }) => {
            return (
              <form
                className="login-wrapper-right"
                autoComplete="true"
                onSubmit={handleSubmit}
              >
                <Field
                  fullWidth
                  required
                  component={TextField}
                  type="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  InputProps={{ className: "input-textfield" }}
                />
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Field
                    fullWidth
                    required
                    component={TextField}
                    type={isShowPassword ? "text" : "password"}
                    label="password"
                    variant="outlined"
                    name="password"
                    InputProps={{ className: "input-textfield" }}
                  />
                  <IconButton
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "13px",
                      color: "lightgray",
                      cursor: "pointer",
                    }}
                    edge="end"
                    size="small"
                  >
                    {isShowPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </div>

                <ButtonPrimary
                  variant="contained"
                  disabled={submitting}
                  type="submit"
                >
                  Sign In
                </ButtonPrimary>
              </form>
            );
          }}
        ></Form>
      </WrapperLogin>
      <div
        style={{
          position: "absolute",
          background: "#fff",
          height: "100%",
          width: "50%",
          right: 0,
          top: 0,
          zIndex: -1,
        }}
      ></div>
    </ContainerLogin>
  );
};

export default Login;
