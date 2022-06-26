import React, { useRef, useState } from "react";
import { ContainerGlobal } from "../../../components/global.styled";
import { BsImageFill } from "react-icons/bs";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { ButtonPrimary, ButtonCancel } from "../../../components/Button";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import {
  ContainerRecipeForm,
  Header,
  SubHeader,
  FormWrapper,
  RecipeNameWrapper,
  RecipeIngredientWrapper,
  RecipeCookingWrapper,
  RecipeDurationAmountWrapper,
  RecipeTagWrapper,
  SubmittingWrapper,
  WrapperAddItem,
  ButtonAddRecipe,
} from "./recipeForm.styled";

const RecipeForm = (props) => {
  document.title = "Tam Rai Dee - Create";
  const refUploadImg = useRef();
  const [hoverDeleteTag, setHoverDeleteTag] = useState(false);
  const [countTextName, setCountTextName] = useState(0);
  const [countTextDescription, setCountTextDescription] = useState(0);

  const handleUploadImg = () => {
    refUploadImg.current.click();
  };

  const onSubmit = (values) => {
    console.log("submit ", values.recipeName);
    console.log("submit ", values.recipeDescription);
  };
  const validateForm = (values) => {
    const err = {};
    if (values.recipeName) {
      if (values.recipeName.length > 70) return;

      setCountTextName(values.recipeName.length);
    }

    if (values.recipeDescription) {
      if (values.recipeDescription.length > 300) return;

      setCountTextDescription(values.recipeDescription.length);
    }

    if (!values.recipeName) {
      setCountTextName(0);
      err.recipeName = "กรุณากรอกชื่อสูตรอาหาร";
    }
    if (!values.recipeDescription) {
      setCountTextDescription(0);
      err.recipeDescription = "กรุณากรอกคำอธิบายสั้นๆเกี่ยวกับเมนูอาหารนี้";
    }

    return err;
  };

  const renderRecipeName = () => {
    return (
      <RecipeNameWrapper>
        <Header>ชื่อสูตรอาหาร</Header>
        <div className="box-field">
          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="เช่น ข้าวกะเพราหมูสับไข่ดาว"
            variant="outlined"
            name="recipeName"
            InputProps={{
              className: "input-textfield input-name",
            }}
          />
          <p className="count-text">{countTextName}/70</p>
        </div>
        <div className="box-field">
          <Field
            required
            component="textarea"
            type="text"
            label="อธิบายสั้น ๆ เกี่ยวกับเมนูอาหารนี้ "
            variant="filled"
            placeholder="อธิบายสั้น ๆ เกี่ยวกับเมนูอาหารนี้"
            name="recipeDescription"
            className="textarea-input"
          />
          <p className="count-text">{countTextDescription}/300</p>
        </div>
      </RecipeNameWrapper>
    );
  };

  const renderRecipeIngredient = () => {
    return (
      <RecipeIngredientWrapper>
        <span className="header-subheader">
          <Header>ส่วนผสม</Header>
          <SubHeader>
            อยากให้เพื่อน ๆ ระบุประมาณส่วนผสมให้ชัดเจน เช่น ช้อนตวง ถ้วยตวง ขีด
            kg กรัม (โดยเฉพาะสูตรของหวาน) เพื่อให้ทำตามได้ง่ายขึ้นค่ะ ^_^
          </SubHeader>
        </span>

        <div className="box-field-ingredient">
          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="เนื้อหมู"
            variant="outlined"
            name="recipeIngredient1"
            InputProps={{ className: "input-textfield" }}
          />

          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="1 kg"
            variant="outlined"
            name="ingredientVolume1"
            InputProps={{ className: "input-textfield" }}
          />

          <IoClose className="icon-delete" />
        </div>
        <div className="box-field-ingredient">
          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="ไข่"
            variant="outlined"
            name="recipeIngredient2"
            InputProps={{ className: "input-textfield" }}
          />

          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="2 ฟอง"
            variant="outlined"
            name="ingredientVolume2"
            InputProps={{ className: "input-textfield" }}
          />

          <IoClose className="icon-delete" />
        </div>
        <div className="box-field-ingredient">
          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="ต้นหอม"
            variant="outlined"
            name="recipeIngredient3"
            InputProps={{ className: "input-textfield" }}
          />

          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="2 ต้น"
            variant="outlined"
            name="ingredientVolume3"
            InputProps={{ className: "input-textfield" }}
          />

          <IoClose className="icon-delete" />
        </div>

        <WrapperAddItem>
          <ButtonAddRecipe whileTap={{ scale: 0.9 }}>
            <AiOutlinePlus /> เพิ่มส่วนผสม
          </ButtonAddRecipe>
        </WrapperAddItem>
      </RecipeIngredientWrapper>
    );
  };

  const renderRecipeCooking = () => {
    return (
      <RecipeCookingWrapper>
        <span className="header-subheader">
          <Header>วิธีทำ</Header>
          <SubHeader>
            เขียนอธิบายสูตรอาหารของเพื่อน ๆ แบบเป็นขั้นเป็นตอน
            เริ่มจากขั้นตอนที่ 1 2 3 ไปเรื่อย ๆ ถ้ามีรูปในวิธีทำในขั้นตอนสำคัญ ๆ
            ก็จะยิ่งมีประโยชน์ และทำตามง่ายขึนไปอีกค่ะ ^_^
          </SubHeader>
        </span>

        <div className="box-field-cooking">
          <span className="box-index-cooking">
            <h4>1</h4>
          </span>

          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="ตีไข่แล้วผสมกับน้ำสต็อก"
            variant="outlined"
            name="reciepDuration1"
            InputProps={{
              className: "input-textfield cooking-input",
            }}
          />
        </div>
        <div className="box-field-cooking">
          <span className="box-index-cooking">
            <h4>2</h4>
          </span>

          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder=". . . . ."
            variant="outlined"
            name="reciepDuration2"
            InputProps={{
              className: "input-textfield cooking-input",
            }}
          />
        </div>
        <WrapperAddItem>
          <ButtonAddRecipe whileTap={{ scale: 0.9 }}>
            <AiOutlinePlus /> เพิ่มวิธีทำ
          </ButtonAddRecipe>
        </WrapperAddItem>
      </RecipeCookingWrapper>
    );
  };

  const renderRecipeDurationAmount = () => {
    return (
      <RecipeDurationAmountWrapper>
        <div className="duration-hr-m">
          <Header>เวลาที่ใช้ในการทำ</Header>
          <span>
            <Field
              required
              component={TextField}
              type="number"
              variant="outlined"
              name="hour"
              InputProps={{
                className: "input-number",
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 2);
              }}
            />
            <p>ชั่วโมง</p>
            <Field
              required
              component={TextField}
              type="number"
              variant="outlined"
              name="minute"
              InputProps={{
                className: "input-number",
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 2);
              }}
            />
            <p>นาที</p>{" "}
          </span>
        </div>

        <div className="amount">
          <Header>สูตรนี้สำหรับ</Header>
          <Field
            fullWidth
            required
            component={TextField}
            type="text"
            placeholder="กี่ท่าน, กี่แก้ว, กี่ปอนด์, กี่แก้ว"
            variant="outlined"
            name="ingredientVolume3"
            InputProps={{ className: "input-textfield" }}
          />
        </div>
      </RecipeDurationAmountWrapper>
    );
  };

  const renderRecipeTag = () => {
    return (
      <RecipeTagWrapper>
        <Header>เลือกแท็กที่เกี่ยวข้องกับเมนูนี้</Header>
        <SubHeader>
          เลือกแท็กหลัก และแท็กอื่น ๆ ตามวัตถุดิบ ประเภทอาหาร
          และวิธีการที่เกี่ยวข้อง เพื่อให้เมนูนี้ถูกค้นเจอง่ายขึ้น ^_^
        </SubHeader>

        <div className="reciep-tag">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setHoverDeleteTag(true)}
            onMouseLeave={() => setHoverDeleteTag(false)}
            className="box-tag"
          >
            {hoverDeleteTag ? <IoClose /> : "ไข่ไก่"}
          </motion.div>
        </div>
        <WrapperAddItem>
          <ButtonAddRecipe whileTap={{ scale: 0.9 }}>
            <AiOutlinePlus /> เพิ่มแท็ก
          </ButtonAddRecipe>
        </WrapperAddItem>
      </RecipeTagWrapper>
    );
  };

  return (
    <ContainerGlobal>
      <ContainerRecipeForm>
        <div className="wrrapper-recipe-form">
          <h1>เขียนสูตรอาหาร</h1>
          <div className="box-image" onClick={handleUploadImg}>
            <BsImageFill className="icon-image" />
            <input
              ref={refUploadImg}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
            <h3>
              <u>อัพโหลด รูปภาพอาหาร</u>
            </h3>
            <p>
              *โปรดใช้รูปอาหารที่คุณทำ ไฟล์ PNG JPEG หรือ JPG ขนาดต่ำกว่า 1 Mb
            </p>
          </div>

          <Form
            onSubmit={onSubmit}
            validate={validateForm}
            render={({ handleSubmit, form, submitting, submitError }) => {
              return (
                <FormWrapper
                  autoComplete="true"
                  onSubmit={handleSubmit}
                  style={{ marginTop: "60px" }}
                >
                  {/* ชื่อสูตรอาหาร */}
                  {renderRecipeName()}
                  <hr
                    style={{
                      width: "99%",
                      border: "2px dashed lightgray",
                      borderTop: "none",
                    }}
                  />
                  {/* ส่วนผสม */}
                  {renderRecipeIngredient()}

                  <hr
                    style={{
                      width: "99%",
                      border: "2px dashed lightgray",
                      borderTop: "none",
                    }}
                  />
                  {/* วิธีทำ */}
                  {renderRecipeCooking()}

                  <hr
                    style={{
                      width: "99%",
                      border: "2px dashed lightgray",
                      borderTop: "none",
                    }}
                  />

                  {/* เวลาที่ใช้ในการทำ & สูตรนี้สำหรับ */}
                  {renderRecipeDurationAmount()}

                  <hr
                    style={{
                      width: "99%",
                      border: "2px dashed lightgray",
                      borderTop: "none",
                    }}
                  />

                  {/* เลือกแท็กที่เกี่ยวข้องกับเมนูนี้ */}
                  {renderRecipeTag()}

                  <hr
                    style={{
                      width: "99%",
                      border: "2px dashed lightgray",
                      borderTop: "none",
                    }}
                  />

                  {/* Button ยกเลิก & บันทึก */}
                  <SubmittingWrapper>
                    <Link to="/">
                      <ButtonCancel
                        type="reset"
                        w="100px"
                        p="10px"
                        justify="center"
                      >
                        ยกเลิก
                      </ButtonCancel>
                    </Link>

                    <ButtonPrimary
                      w="100px"
                      p="10px"
                      variant="contained"
                      disabled={submitting}
                      type="submit"
                    >
                      บันทึก
                    </ButtonPrimary>
                  </SubmittingWrapper>
                </FormWrapper>
              );
            }}
          ></Form>
        </div>
      </ContainerRecipeForm>
    </ContainerGlobal>
  );
};

export default RecipeForm;
