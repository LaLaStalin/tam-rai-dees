import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Divider from "../../components/Divider/divider";
import { ButtonPrimary, ButtonCancel } from "../../components/Button/index";
import { ButtonChangeProfile } from "../profile/account";
import { AuthContext } from "../../util/context";
import Avatar from "@mui/material/Avatar";
import Swal from "sweetalert2";
import { handleSubmitEditMember, handleCancelEditMember } from "./apiAdmin";

const ContainerMemberEdit = styled.div`
  padding: 40px;
  height: fit-content;
  position: relative;

  .title {
    font-size: 26px;
    color: gray;
    margin-bottom: 20px;
  }

  .wrapper-member-edit {
    display: flex;
    gap: 80px;

    @media screen and (max-width: 860px) {
      flex-direction: column;
      gap: 0;
    }

    .avatar {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > span {
        display: flex;
        flex-direction: column;

        .txt-avatar {
          padding-top: 20px;
          padding-bottom: 10px;
          text-align: start;
          color: gray;
          font-size: var(--txt-sub);
        }

        .avatar-img {
          width: 250px;
          height: 250px;
          font-size: 100px;
          object-fit: cover;
          border-radius: 12px;
          background: var(--main-color);
        }
      }

      .button-change-remove {
        display: flex;
        padding: 20px 0;
        gap: 30px;
        align-items: center;
        justify-content: flex-end;

        .btn-change-profile {
          width: fit-content;
          padding: 0 15px;
          height: 50px;
          font-size: var(--txt-sub);

          &:hover {
            color: var(--txt-theme);
          }
        }

        & > span {
          color: gray;
          cursor: pointer;

          &:hover {
            color: var(--txt-theme);
          }
        }
      }
    }

    .txt-profile-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;

      @media screen and (max-width: 860px) {
        align-items: center;
      }

      .txt-datetime {
        display: flex;
        color: gray;
        padding-top: 10px;
        padding-bottom: 20px;
      }

      .input-wrapper {
        display: flex;
        width: fit-content;
        flex-direction: column;
        gap: 30px;

        .input-textfield {
          width: 400px;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          height: 55px;
          padding: 0 10px;
          border-radius: 4px;

          @media screen and (max-width: 1035px) {
            width: 300px;
          }
          @media screen and (max-width: 370px) {
            width: 250px;
          }
        }
      }
    }
  }

  .confirm-form-wrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;

    .button-account {
      display: flex;
      width: 100%;
      gap: 10px;
      justify-content: right;
    }
  }
`;

const Header = styled.h1`
  font-size: 40px;
  margin: 20px 0 5px 0;
  color: var(--txt-theme);
`;

const MemberEdit = (props) => {
  document.title = "Kin Rai Dee - Register";
  const refInputChangeProfile = useRef();
  const [file, setFile] = useState([]);
  const [uploadImgUrl, setUploadImgUrl] = useState();
  const [urlProfile, setUrlProfile] = useState(null);
  const { apiUrl } = AuthContext();

  useEffect(() => {
    if (props.memberSelected.user_img) {
      setUrlProfile(`${apiUrl}/imgs/profile/${props.memberSelected.user_img}`);
    }
    if (file.length < 1) return;
    const newFile = [];
    file.forEach((img) => newFile.push(URL.createObjectURL(img)));
    setUrlProfile(newFile[0]);
  }, [file]);

  const handleProfile = (e) => {
    const imageFile = e.target.files[0];

    if (imageFile) {
      if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
        alert("Please select valid image.");
        return;
      }

      let fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = (event) => {
        setUploadImgUrl(event.target.result);
      };
      setFile([...e.target.files]);
    }
  };

  const handleRemoveProfile = () => {
    setFile([]);
    setUrlProfile(`${apiUrl}/imgs/profile/${props.memberSelected.user_img}`);
  };

  const renderAvatar = () => {
    return (
      <>
        <div className="avatar">
          <span>
            <p className="txt-avatar">Avatar</p>
            <Avatar
              className="avatar-img"
              style={{ borderRadius: "10px" }}
              src={urlProfile}
              alt="avatar"
            >
              {!props.memberSelected.user_img &&
                props.memberSelected.user_firstname_index}
            </Avatar>
          </span>

          <div className="button-change-remove">
            <ButtonChangeProfile
              onClick={() => refInputChangeProfile.current.click()}
              className="btn-change-profile"
            >
              <p>Change</p>
              <input
                onChange={handleProfile}
                ref={refInputChangeProfile}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
              />
            </ButtonChangeProfile>
            <span onClick={handleRemoveProfile}>Remove</span>
          </div>
        </div>
      </>
    );
  };

  const renderInputForm = () => {
    const onSubmit = (values) => {
      handleSubmitEditMember(
        values,
        props.memberSelected,
        apiUrl,
        uploadImgUrl,
        file
      );
    };

    const onCancel = () => {
      handleCancelEditMember(props.memberSelected);
    };

    const validateForm = (values) => {
      const err = {};
      console.log("ROEL: ", values.role);
      if (!values.firstname) err.firstname = "กรุณากรอกชื่อ";
      if (!values.lastname) err.lastname = "กรุณากรอกนามสกุล";
      if (!values.email) err.email = "กรุณากรอกอีเมล";
      if (!values.role) err.role = "กรุณากรอกระดับ";
    };

    return (
      <>
        <Form
          onSubmit={onSubmit}
          validate={validateForm}
          render={({ handleSubmit, form, submitting, submitError }) => {
            return (
              <form
                className="txt-profile-wrapper"
                autoComplete="true"
                onSubmit={handleSubmit}
              >
                <span className="txt-datetime">
                  วันวลาที่สมัคร :
                  <p style={{ color: "var(--txt-theme)" }}>
                    {props.memberSelected.user_datetime}
                  </p>
                </span>

                <div className="input-wrapper">
                  <div
                    style={{
                      height: "60px",
                    }}
                  >
                    <Field
                      required
                      component="select"
                      name="role"
                      className="input-textfield"
                      initialValue={props.memberSelected.user_urol}
                    >
                      <option value={props.memberSelected.user_urole}>
                        {props.memberSelected.user_urole === "A"
                          ? "❤️ A"
                          : "💛 M"}
                      </option>
                      <option
                        value={
                          props.memberSelected.user_urole === "A" ? "M" : "A"
                        }
                      >
                        {props.memberSelected.user_urole === "A"
                          ? "💛 M"
                          : "❤️ A"}
                      </option>
                    </Field>
                  </div>

                  <div
                    style={{
                      height: "60px",
                    }}
                  >
                    <Field
                      fullWidth
                      required
                      component={TextField}
                      type="text"
                      label="First name"
                      variant="outlined"
                      name="firstname"
                      initialValue={props.memberSelected.user_firstname}
                      InputProps={{ className: "input-textfield" }}
                    />
                  </div>

                  <div
                    style={{
                      height: "60px",
                    }}
                  >
                    <Field
                      fullWidth
                      required
                      component={TextField}
                      type="text"
                      label="Last name"
                      variant="outlined"
                      name="lastname"
                      initialValue={props.memberSelected.user_lastname}
                      InputProps={{ className: "input-textfield" }}
                    />
                  </div>

                  <div
                    style={{
                      height: "60px",
                    }}
                  >
                    <Field
                      fullWidth
                      required
                      component={TextField}
                      type="email"
                      label="Email"
                      variant="outlined"
                      name="email"
                      initialValue={props.memberSelected.user_email}
                      InputProps={{ className: "input-textfield" }}
                    />
                  </div>
                </div>

                {/*SUBMIT FORM*/}
                <div className="confirm-form-wrapper">
                  <span style={{ marginTop: "100px" }}>
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
                  </span>
                </div>
              </form>
            );
          }}
        ></Form>
      </>
    );
  };

  return (
    <ContainerMemberEdit>
      <Header>MemberEdit</Header>
      <p className="title">ID : 00{props.memberSelected.id}</p>
      <div className="wrapper-member-edit">
        {renderAvatar()}
        {renderInputForm()}
        <div
          style={{
            position: "absolute",
            bottom: "13%",
            left: "5%",
            right: "5%",
            width: "90%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Divider horizontal="100%" color="lightgray" />
        </div>
      </div>
    </ContainerMemberEdit>
  );
};

export default MemberEdit;
