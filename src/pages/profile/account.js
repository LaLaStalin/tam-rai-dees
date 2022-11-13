import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Divider from "../../components/Divider/divider";
import { ButtonPrimary, ButtonCancel } from "../../components/Button/index";
import { AuthContext } from "../../util/context";
import Avatar from "@mui/material/Avatar";
import { handleSubmitAccount, handleCancelAccount } from "./apiProfile";

const ContainerAccount = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 2px solid lightgray;
  padding: 16px;
  gap: 20px;

  .wrrapper-account {
    display: flex;
    flex-direction: column;

    & > h3 {
      color: var(--txt-theme);
    }

    .avatar-account {
      margin-top: 10px;
      display: flex;
      gap: 30px;
      align-items: center;

      @media screen and (max-width: 340px) {
        flex-direction: column;
      }

      .btn-change-profile {
        width: fit-content;
        padding: 0 15px;
        height: 50px;

        &:hover {
          color: var(--txt-theme);
        }
      }

      .avatar-img {
        width: 100px;
        height: 100px;
        font-size: 35px;
        object-fit: cover;
        border-radius: 12px;
        background: ${({ urlProfile }) =>
          !urlProfile ? "var(--main-color)" : "transparent"};
      }

      & > span {
        color: gray;
        cursor: pointer;

        &:hover {
          color: var(--txt-theme);
        }
      }
    }

    .form-name-account-wrapper {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      gap: 40px;

      .wrapper-input {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 30px;

        @media screen and (max-width: 500px) {
          grid-template-rows: auto auto;
          grid-template-columns: none;
        }

        .input-textfield {
          font-size: var(--txt-sub);
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          height: 55px;
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

export const ButtonChangeProfile = styled.button`
  background: linear-gradient(
    180deg,
    rgba(245, 56, 3, 0.1) 0%,
    rgba(245, 208, 32, 0.1) 100%
  );
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid orange;
  color: #666;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    color: #222;
  }
`;

const Account = () => {
  const [file, setFile] = useState([]);
  const [uploadImgUrl, setUploadImgUrl] = useState();
  const [urlProfile, setUrlProfile] = useState(null);
  const refInputChangeProfile = useRef();
  const { user, setUser, apiUrl } = AuthContext();

  useEffect(() => {
    if (user.user_img) {
      setUrlProfile(`${apiUrl}/imgs/profile/${user.user_img}`);
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
    if (user.user_img) {
      setUrlProfile(`${apiUrl}/imgs/profile/${user.user_img}`);
    } else {
      setUrlProfile("");
    }
  };

  const renderAvatar = () => {
    return (
      <>
        <div className="avatar-account">
          <Avatar
            className="avatar-img"
            style={{ borderRadius: "10px" }}
            src={urlProfile}
            alt="avatar"
          >
            {!user.user_img && user.user_firstname[0]}
          </Avatar>
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
      </>
    );
  };

  const renderInputForm = () => {
    const onSubmit = (values) => {
      handleSubmitAccount(values, apiUrl, uploadImgUrl, user, file, setUser);
    };

    const onCancel = () => {
      handleCancelAccount();
    };

    const validateForm = (values) => {
      const err = {};
      if (!values.firstname) err.firstname = "กรุณากรอกชื่อ";
      if (!values.lastname) err.lastname = "กรุณากรอกนามสกุล";
      return err;
    };

    return (
      <>
        <Form
          onSubmit={onSubmit}
          validate={validateForm}
          render={({ handleSubmit, form, submitting, submitError }) => {
            return (
              <form
                className="form-name-account-wrapper"
                autoComplete="true"
                onSubmit={handleSubmit}
              >
                <div className="wrapper-input">
                  <Field
                    fullWidth
                    required
                    component={TextField}
                    type="text"
                    initialValue={
                      user.user_firstname ? user.user_firstname : ""
                    }
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
                    initialValue={user.user_lastname ? user.user_lastname : ""}
                    label="Last name"
                    variant="outlined"
                    name="lastname"
                    InputProps={{ className: "input-textfield" }}
                  />
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
      </>
    );
  };

  return (
    <ContainerAccount urlProfile={urlProfile}>
      <div className="wrrapper-account">
        <h3>Personal information</h3>
        <p
          style={{
            marginTop: "20px",
            fontSize: "var(--txt-primary)",
            color: "gray",
          }}
        >
          Avatar
        </p>
        {renderAvatar()}
        {renderInputForm()}
      </div>
    </ContainerAccount>
  );
};

export default Account;
