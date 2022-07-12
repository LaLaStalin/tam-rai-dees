import React, { useState } from "react";
import styled from "styled-components";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Divider from "../../components/Divider/divider";
import { ButtonPrimary, ButtonCancel } from "../../components/Button/index";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@material-ui/core";
import { AuthContext } from "../../util/context";
import { handleSubmitPassword, handleCancelPassword } from "./apiProfile";
const ContainerPassword = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 2px solid lightgray;
  padding: 16px;

  .wrrapper-password {
    display: flex;
    flex-direction: column;

    & > h3 {
      color: var(--txt-theme);
    }

    .form-password {
      display: flex;
      flex-direction: column;
      margin-top: 42px;

      .wrapper-inputField {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 400px;

        @media screen and (max-width: 500px) {
          width: auto;
        }

        .input-textfield {
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          height: 55px;
          font-size: var(--txt-sub);
          color: var(--txt-theme);
        }
      }

      .confirm-form-wrapper {
        display: flex;
        gap: 20px;
        flex-direction: column;

        .button-account {
          display: flex;
          width: 100%;
          gap: 10px;
          justify-content: right;
        }
      }
    }
  }
`;

const Password = () => {
  const [isShowOldPassword, setIsShowOldPassword] = useState(false);
  const [isShowNewPassword, setIsNewShowPassword] = useState(false);
  const [isShowRetypePassword, setIsRetypePassword] = useState(false);
  const { user, setUser, apiUrl } = AuthContext();

  const onSubmit = (values) => {
    handleSubmitPassword(values, user, apiUrl, setUser);
  };

  const onCancel = () => {
    handleCancelPassword();
  };
  const validateForm = (values) => {
    const err = {};
    if (!values.email) err.email = "กรุณากรอกอีเมล";
    if (!values.oldPassword) err.oldPassword = "กรุณากรอกรหัสผ่านเก่า";
    if (!values.newPassword) err.newPassword = "กรุณากรอกรหัสผ่าน";
    if (!values.retypePassword) err.retypePassword = "กรุณากรอกยืนยันรหัสผ่าน";
    if (values.newPassword && values.newPassword.length <= 8)
      err.newPassword = "กรุณากรอกรหัสผ่านมากกว่า 8 ตัว";
    if (values.newPassword !== values.retypePassword)
      err.retypePassword = "รหัสผ่านไม่ตรงกัน";
    return err;
  };

  return (
    <ContainerPassword>
      <div className="wrrapper-password">
        <h3>Email, Password</h3>
        <Form
          onSubmit={onSubmit}
          validate={validateForm}
          render={({ handleSubmit, form, submitting, submitError }) => {
            return (
              <form
                className="form-password"
                autoComplete="false"
                onSubmit={handleSubmit}
              >
                <div className="wrapper-inputField">
                  <Field
                    fullWidth
                    required
                    component={TextField}
                    initialValue={user.user_email ? user.user_email : ""}
                    type="email"
                    label="Email"
                    variant="outlined"
                    disabled
                    style={{ background: "lightgray" }}
                    name="email"
                    InputProps={{ className: "input-textfield" }}
                  />

                  {/*INPUT OLD PASSWORD */}
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
                      type={isShowOldPassword ? "text" : "password"}
                      label="Old Password"
                      variant="outlined"
                      name="oldPassword"
                      InputProps={{ className: "input-textfield" }}
                    />
                    <IconButton
                      onClick={() => setIsShowOldPassword(!isShowOldPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "3px",
                        color: "lightgray",
                        cursor: "pointer",
                      }}
                    >
                      {isShowOldPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </div>

                  {/*INPUT NEW PASSWORD */}
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
                      type={isShowNewPassword ? "text" : "password"}
                      label="New Password"
                      variant="outlined"
                      name="newPassword"
                      InputProps={{ className: "input-textfield" }}
                    />
                    <IconButton
                      onClick={() => setIsNewShowPassword(!isShowNewPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "3px",
                        color: "lightgray",
                        cursor: "pointer",
                      }}
                    >
                      {isShowNewPassword ? (
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
                        top: "3px",
                        color: "lightgray",
                        cursor: "pointer",
                      }}
                    >
                      {isShowRetypePassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </div>
                </div>

                {/*SUBMIT FORM*/}
                <div className="confirm-form-wrapper">
                  <span style={{ marginTop: "60px" }}>
                    <Divider horizontal="100%" color="lightgray" />
                  </span>

                  <div className="button-account">
                    <ButtonCancel
                      type="reset"
                      w="100px"
                      p="10px"
                      justify="center"
                      onClick={onCancel}
                    >
                      ยกเลิก
                    </ButtonCancel>
                    <ButtonPrimary
                      w="100px"
                      p="10px"
                      variant="contained"
                      disabled={submitting}
                      type="submit"
                    >
                      บันทึก
                    </ButtonPrimary>
                  </div>
                </div>
              </form>
            );
          }}
        ></Form>
      </div>
    </ContainerPassword>
  );
};

export default Password;
