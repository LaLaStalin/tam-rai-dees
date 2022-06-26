import { BorderHorizontal } from "@mui/icons-material";
import React from "react";
import { CardIngredient } from "../../components/Card";

const CardIngredientByType = (props) => {
  const handleActiveIngredient = (id, name, type) => {
    //เช็คว่ามีการกดวัตถุดิบนั้นหรือยัง ถ้ากดแล้วเราจะให้มันลบออกจากลิส และขอบ border ก็จะเอาออกด้วย
    if (props.ingredientActive.some((el) => el.idIngre === id)) {
      const newArrayActive = [...props.ingredientActive];
      const findIndex = newArrayActive.findIndex(
        (object) => object.idIngre === id
      );
      newArrayActive.splice(findIndex, 1);
      console.log("new: ", newArrayActive);
      props.setIngredientActive(newArrayActive);
      return;
    }

    // ADD ingredient
    props.setIngredientActive([
      ...props.ingredientActive,
      { idIngre: id, nameIngre: name, typeIngre: type, delete: "ลบ" },
    ]);
    console.log("ARRAY: ", props.ingredientActive);
  };

  return (
    <>
      {/*slice คือ param ตัวแรก มันจะเอา index ตัวนั้น ถึง index param ที่2 แต่ไม่เอา index ของ param ที่ 2*/}
      {props.arrayIngredient
        .slice(props.indexFirst, props.indexLast)
        .map((items) => (
          <CardIngredient
            key={items.id}
            name={items.name}
            img={items.src}
            id={items.id}
            active={props.ingredientActive}
            onClicked={() =>
              handleActiveIngredient(items.id, items.name, props.type)
            }
          />
        ))}
    </>
  );
};

export default CardIngredientByType;
