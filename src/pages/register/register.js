import React from "react";
import { TopicHeaderAuth } from "../login/login";
import { ContainerLogin, WrapperLogin } from "../login/login.styled";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { ButtonPrimary } from "../../components/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@material-ui/core";
import { useState } from "react";

const Register = () => {
  document.title = "Tam Rai Dee - Register";
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRetypePassword, setIsRetypePassword] = useState(false);

  const onSubmit = (values) => {
    console.log("submit ", values.email);
    console.log("submit ", values.password);
  };
  const validateForm = (values) => {
    const err = {};
    if (!values.firstname) err.firstname = "กรุณากรอกชื่อ";
    if (!values.lastname) err.lastname = "กรุณากรอกนามสกุล";
    if (!values.email) err.email = "กรุณากรอกอีเมล";
    if (!values.password) err.password = "กรุณากรอกรหัสผ่าน";
    if (!values.retypePassword)
      err.retypePassword = "กรุณากรอกรหัสผ่านอีกครั้ง";
    if (values.password && values.password.length <= 8)
      err.password = "กรุณากรอกรหัสผ่านมากกว่า 8 ตัว";
    if (values.password !== values.retypePassword)
      err.retypePassword = "รหัสผ่านไม่ตรงกัน";
    return err;
  };
  return (
    <ContainerLogin isRegister="auto">
      <WrapperLogin>
        <TopicHeaderAuth
          type="Sign Up"
          isHave="มีบัญชีหรือเป็นสมาชิก"
          path="/login"
          linkName="เข้าสู่ระบบได้ที่นี่"
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
                style={{ marginTop: "60px" }}
              >
                <Field
                  fullWidth
                  required
                  component={TextField}
                  type="text"
                  label="First name"
                  variant="outlined"
                  name="firstname"
                  InputProps={{ className: "input-textfield" }}
                />

                <Field
                  fullWidth
                  required
                  component={TextField}
                  type="text"
                  label="Last name"
                  variant="outlined"
                  name="lastname"
                  InputProps={{ className: "input-textfield" }}
                />
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

                {/*INPUT PASSWORD */}
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
                    label="Password"
                    variant="outlined"
                    name="password"
                    InputProps={{ className: "input-textfield" }}
                  />
                  <IconButton
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      color: "lightgray",
                    }}
                  >
                    {isShowPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </div>

                {/*INPUT RETYPE PASSWORD */}
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
                    type={isShowRetypePassword ? "text" : "password"}
                    label="Retype Password"
                    variant="outlined"
                    name="retypePassword"
                    InputProps={{ className: "input-textfield" }}
                  />
                  <IconButton
                    onClick={() => setIsRetypePassword(!isShowRetypePassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      color: "lightgray",
                    }}
                  >
                    {isShowRetypePassword ? (
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
                  Sign Up
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

export default Register;
