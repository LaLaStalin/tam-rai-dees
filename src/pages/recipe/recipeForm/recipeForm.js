import React, { useRef, useState, useEffect } from "react";
import { ContainerGlobal } from "../../../components/global.styled";
import { BsImageFill } from "react-icons/bs";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { ButtonPrimary, ButtonCancel } from "../../../components/Button";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion/dist/framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import RecipeModalTag from "./recipeModalTag";
import { AuthContext } from "../../../util/context";
import Swal from "sweetalert2";
import axios from "axios";
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
  const refUploadImg = useRef();
  const [countTextName, setCountTextName] = useState(0);
  const [countTextDescription, setCountTextDescription] = useState(0);
  const [file, setFile] = useState([]);
  const [urlRecipe, setUrlRecipe] = useState(null);
  const { user } = AuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  //STATE FOR ADD INGREDIENT , COOKING , TAG INPUT
  //INGREDIENT
  const [listIngredientInput, setListIngredientInput] = useState([
    {
      id: 1,
      nameInputIngre: "recipeIngredient1",
      nameInputVolume: "recipeIngredientVolume1",
      placeholderIngre: "เนื้อหมู",
      placeholderVolume: "1 Kg",
      valueName: "",
      valuevolume: "",
    },
  ]);
  //COOKING
  const [listCookingInput, setListCookingInput] = useState([
    {
      id: 1,
      nameInputCooking: "reciepCooking1",
      placeholderCooking: "ตีไข่แล้วผสมกับน้ำสต็อก",
      valueCooking: "",
    },
  ]);
  // TAG
  const [listTag, setListTag] = useState([]);

  useEffect(() => {
    if (file.length < 1) return;
    const newFile = [];
    file.forEach((img) => newFile.push(URL.createObjectURL(img)));
    setUrlRecipe(newFile[0]);
  }, [file]);

  useEffect(() => {
    if (props.mode === "edit") {
      console.log("tagggss");
      location.state.recipeTagFromState.map((tags) => {
        setListTag((preTag) => [
          ...preTag,
          { id: tags.tag_id, nameTag: tags.tag_name },
        ]);
      });
      setListIngredientInput([]);
      location.state.recipeIngredientFromState.map((ingre, index) => {
        setListIngredientInput((preIngre) => [
          ...preIngre,
          {
            id: ingre.ingredient_id,
            nameInputIngre: `recipeIngredient${index + 1}`,
            nameInputVolume: `recipeIngredientVolume${index + 1}`,
            placeholderIngre: "",
            placeholderVolume: "",
            valueName: ingre.ingredient_name,
            valueVolume: ingre.ingredient_volume,
          },
        ]);
      });

      // location.state.recipeTagFromState.map((tags) => {
      //   setListTag((preTag) => [
      //     ...preTag,
      //     { id: tags.tag_id, nameTag: tags.tag_name },
      //   ]);
      // });
    }
  }, []);

  const handleUploadImg = (e) => {
    console.log(e.target.files[0]);
    const imageFile = e.target.files[0];
    if (imageFile) {
      if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
        alert("Please select valid image.");
        return;
      }
      setFile([...e.target.files]);
    }
  };
  console.log("recipe: ", location.state);

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
            initialValue={
              props.mode === "edit"
                ? location.state.recipeFromState.recipe_name
                : ""
            }
            InputProps={{
              className: "input-textfield input-name",
            }}
          />
          <p className="count-text">{countTextName}</p>
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
            initialValue={
              props.mode === "edit"
                ? location.state.recipeFromState.recipe_description
                : ""
            }
          />
          <p className="count-text">{countTextDescription}</p>
        </div>
      </RecipeNameWrapper>
    );
  };

  const renderRecipeIngredient = () => {
    // count number of List ingredient for generate ID
    const [countIdListIngre, setCountIdListIngre] = useState(listIngredientInput.length);

    const handleAddIngredient = () => {
      const plusCountId = countIdListIngre + 1;
      setListIngredientInput([
        ...listIngredientInput,
        {
          id: plusCountId,
          nameInputIngre: `recipeIngredient${plusCountId}`,
          nameInputVolume: `recipeIngredientVolume${plusCountId}`,
          placeholderIngre: "",
          placeholderVolume: "",
          valueName: "",
          valueVolume: "",
        },
      ]);
      setCountIdListIngre(plusCountId);
      console.log(listIngredientInput);
    };

    const handleDeleteIngredient = (id) => {
      const newListIngredient = [...listIngredientInput];
      const findIndex = newListIngredient.findIndex((del) => del.id === id);
      newListIngredient.splice(findIndex, 1);
      setListIngredientInput(newListIngredient);
    };

    return (
      <RecipeIngredientWrapper>
        <span className="header-subheader">
          <Header>ส่วนผสม</Header>
          <SubHeader>
            อยากให้เพื่อน ๆ ระบุประมาณส่วนผสมให้ชัดเจน เช่น ช้อนตวง ถ้วยตวง ขีด
            kg กรัม (โดยเฉพาะสูตรของหวาน) เพื่อให้ทำตามได้ง่ายขึ้นค่ะ ^_^
          </SubHeader>
        </span>

        {listIngredientInput.map((items) => (
          <div className="box-field-ingredient" key={items.id}>
            <Field
              fullWidth
              required
              component={TextField}
              type="text"
              placeholder={items.placeholderIngre ? items.placeholderIngre : ""}
              variant="outlined"
              name={items.nameInputIngre}
              initialValue={props.mode === "edit" ? items.valueName : ""}
              InputProps={{ className: "input-textfield" }}
            />
            <Field
              fullWidth
              component={TextField}
              type="text"
              placeholder={
                items.placeholderVolume ? items.placeholderVolume : ""
              }
              variant="outlined"
              name={items.nameInputVolume}
              initialValue={props.mode === "edit" ? items.valueVolume : ""}
              InputProps={{ className: "input-textfield" }}
            />

            <IoClose
              className="icon-delete"
              onClick={() => handleDeleteIngredient(items.id)}
            />
          </div>
        ))}

        <WrapperAddItem>
          <ButtonAddRecipe
            whileTap={{ scale: 0.9 }}
            onClick={handleAddIngredient}
          >
            <AiOutlinePlus /> เพิ่มส่วนผสม
          </ButtonAddRecipe>
        </WrapperAddItem>
      </RecipeIngredientWrapper>
    );
  };

  const renderRecipeCooking = () => {
    const [countIdListCooking, setCountIdListCooking] = useState(listCookingInput.length);
    const handleAddCooking = () => {
      const plusCountId = countIdListCooking + 1;
      setListCookingInput([
        ...listCookingInput,
        {
          id: plusCountId,
          nameInputCooking: `reciepCooking${plusCountId}`,
          placeholderCooking: "",
        },
      ]);

      setCountIdListCooking(plusCountId);
    };

    const handleDeleteCooking = (id) => {
      const newListCooking = [...listCookingInput];
      const findIndex = newListCooking.findIndex((del) => del.id === id);
      newListCooking.splice(findIndex, 1);
      setListCookingInput(newListCooking);
    };

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

        {listCookingInput.map((items, index) => (
          <div className="box-field-cooking" key={items.id}>
            <span className="box-index-cooking">
              <h4>{index + 1}</h4>
            </span>

            <Field
              fullWidth
              required
              component={TextField}
              type="text"
              placeholder={
                items.placeholderCooking ? items.placeholderCooking : ""
              }
              variant="outlined"
              name={items.nameInputCooking}
              InputProps={{
                className: "input-textfield cooking-input",
              }}
            />
            <IoClose
              className="icon-delete"
              onClick={() => {
                handleDeleteCooking(items.id);
              }}
            />
          </div>
        ))}

        <WrapperAddItem>
          <ButtonAddRecipe whileTap={{ scale: 0.9 }} onClick={handleAddCooking}>
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
            <p>นาที</p>
          </span>
        </div>

        <div className="amount">
          <Header className="header-duration">สูตรนี้สำหรับ</Header>
          <Field
            fullWidth
            component={TextField}
            type="text"
            placeholder="กี่ท่าน, กี่แก้ว, กี่ปอนด์, กี่แก้ว"
            variant="outlined"
            name="amount"
            InputProps={{ className: "input-textfield" }}
          />
        </div>
      </RecipeDurationAmountWrapper>
    );
  };

  const renderRecipeTag = () => {
    const [open, setOpen] = useState(false);
    const [hoverDeleteTag, setHoverDeleteTag] = useState(null);
    const handleModalTag = () => setOpen(!open);

    const handleListTag = (id, name) => {
      console.log(listTag);

      //DELETET tag
      if (listTag.some((ob) => ob.id === id)) {
        const newListTag = [...listTag];
        const findIndex = newListTag.findIndex((ob) => ob.id === id);
        newListTag.splice(findIndex, 1);
        setListTag(newListTag);
        return;
      }

      //Add tag
      setListTag([
        ...listTag,
        {
          id: id,
          nameTag: name,
        },
      ]);
    };

    return (
      <RecipeTagWrapper>
        <span className="header-subheader">
          <Header>เลือกแท็กที่เกี่ยวข้องกับเมนูนี้</Header>
          <SubHeader>
            เลือกแท็กหลัก และแท็กอื่น ๆ ตามวัตถุดิบ ประเภทอาหาร
            และวิธีการที่เกี่ยวข้อง เพื่อให้เมนูนี้ถูกค้นเจอง่ายขึ้น ^_^
          </SubHeader>
        </span>
        {listTag.length > 0 ? (
          <div className="reciep-tag">
            {listTag.map((items) => (
              <span
                key={items.id}
                onClick={() => handleListTag(items.id, items.name)}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoverDeleteTag(items.id)}
                  onMouseLeave={() => setHoverDeleteTag(null)}
                  className="box-tag"
                >
                  {hoverDeleteTag === items.id ? "X" : items.nameTag}
                </motion.div>
              </span>
            ))}
          </div>
        ) : (
          <p
            style={{
              color: "#ff5c60",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            อย่าลืมเลือกแท็กอย่างน้อย 1 แท็กนะจ๊ะ!
          </p>
        )}

        <RecipeModalTag
          open={open}
          handleModalTag={handleModalTag}
          listTag={listTag}
          handleListTag={handleListTag}
          // addListTag={handleAddTag}
        />

        <WrapperAddItem>
          <ButtonAddRecipe whileTap={{ scale: 0.9 }} onClick={handleModalTag}>
            <AiOutlinePlus /> เพิ่มแท็ก
          </ButtonAddRecipe>
        </WrapperAddItem>
      </RecipeTagWrapper>
    );
  };

  const onSubmit = (values) => {
    if (listTag.length <= 0) {
      return Swal.fire({
        icon: "error",
        title: "แท็ก",
        text: "กรุณาเลือกอย่างน้อย 1 แท็ก!",
      });
    }
    if (file.length <= 0) {
      return Swal.fire({
        icon: "error",
        title: "รูปภาพ",
        text: "กรุณาเลือกรูปภาพสูตรอาหาร!",
      });
    }

    const getValueFromListIngredient = [];
    listIngredientInput.map((items, index) => {
      getValueFromListIngredient.push({
        name: values[`recipeIngredient${index + 1}`],
        volume: values[`recipeIngredientVolume${index + 1}`]
          ? values[`recipeIngredientVolume${index + 1}`]
          : null,
      });
    });

    const getValueFromListCooking = [];
    listCookingInput.map((items, index) => {
      getValueFromListCooking.push(values[`reciepCooking${index + 1}`]);
    });

    const getValueFromListTag = [];
    listTag.map((items, index) => {
      getValueFromListTag.push(items.id);
    });

    Swal.fire({
      title: "Are you sure?",
      text: "พร้อมที่จะโพสต์สูตรอาหารของคุณแล้วใช่ไหม><",
      icon: "warning",
      cancelButtonText: "ไม่, ขอแก้ไขอีกแปป",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, โพสต์เลย!",
    }).then((result) => {
      if (result.dismiss) return;
      axios
        .post(`http://localhost/tamraidee-api/recipe/insertRecipe.php`, {
          user_id: parseInt(user.user_id),
          img: file[0].name,
          name: values.recipeName,
          description: values.recipeDescription,
          listIngredient: getValueFromListIngredient,
          listCooking: getValueFromListCooking,
          minute: values.minute,
          hour: values.hour ? values.hour : null,
          amount: values.amount ? values.amount : null,
          listTag: getValueFromListTag,
        })
        .then((res) => {
          console.log("redS: ", res.data);
          if (res.data.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Success",
              text: "ข้อมูลถูกบันทึกเรียบร้อย><",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
    });
  };

  const onCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "อยากจะยกเลิกการแก้ไขสูตรอาหารของคุณจริงๆหรอ><",
      icon: "warning",
      cancelButtonText: "แก้ไขต่อ",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, ยกเลิกเลย!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ยกเลิกสำเร็จ",
          text: "Your recipe has been canceled.",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/myrecipes");
        }, 1500);
      }
    });
  };

  const validateForm = (values) => {
    const err = {};
    if (values.recipeName) {
      setCountTextName(values.recipeName.length);
    }

    if (!values.recipeName) {
      setCountTextName(0);
      err.recipeName = "กรุณากรอกชื่อสูตรอาหาร";
    }

    if (values.recipeDescription) {
      setCountTextDescription(values.recipeDescription.length);
    }

    if (!values.recipeDescription) {
      setCountTextDescription(0);
      err.recipeDescription = "กรุณากรอกคำอธิบายสั้นๆเกี่ยวกับเมนูอาหารนี้";
    }

    listIngredientInput.map((items, index) => {
      if (!values[`recipeIngredient${index + 1}`])
        err[`recipeIngredient${index + 1}`] = "กรุณากรอกชื่อวัตถุดิบ";
    });

    listCookingInput.map((items, index) => {
      if (!values[`reciepCooking${index + 1}`])
        err[`reciepCooking${index + 1}`] = "กรุณากรอกวิธีการทำอาหาร";
    });

    if (!values.minute) {
      err.minute = "กรุณากรอกนาที";
    }

    return err;
  };

  return (
    <ContainerGlobal>
      <ContainerRecipeForm>
        <div className="wrrapper-recipe-form">
          <h1>เขียนสูตรอาหาร</h1>
          <div
            className="box-image"
            onClick={() => refUploadImg.current.click()}
          >
            {urlRecipe ? (
              <>
                <img
                  src={urlRecipe}
                  alt="img-recipe"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", borderRadius: "22px" }}
                />
                <input
                  onChange={handleUploadImg}
                  ref={refUploadImg}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                />
              </>
            ) : (
              <>
                <BsImageFill className="icon-image" />
                <input
                  onChange={handleUploadImg}
                  ref={refUploadImg}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                />
                <h3>
                  <u>อัพโหลด รูปภาพอาหาร</u>
                </h3>
                <p>
                  *โปรดใช้รูปอาหารที่คุณทำ ไฟล์ PNG JPEG หรือ JPG ขนาดต่ำกว่า 1
                  Mb
                </p>
              </>
            )}
          </div>

          <Form
            onSubmit={onSubmit}
            validate={validateForm}
            render={({ handleSubmit, submitting, submitError }) => {
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
                    <ButtonCancel
                      type="reset"
                      w="100px"
                      p="10px"
                      onClick={onCancel}
                      justify="center"
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
