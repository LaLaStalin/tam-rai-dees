import React, { useState } from "react";
import { CardIngredient } from "../../components/Card";

const CardIngredientByType = (props) => {
  const handleActiveIngredient = (id, name, type) => {
    const convertActiveArrayForFilter = [];

    //Checking whether there is any material yet?,
    //If already has material it will get that material out from the array

    if (props.ingredientActive.some((el) => el.idIngre === id)) {
      //Delete ingredientActive that was chosen
      props.handleDeleteIngredientChosen(id);

      return;
    }

    // ADD ingredients

    props.setIngredientActive((prvState) => [
      ...prvState,
      { idIngre: id, nameIngre: name, typeIngre: type, delete: "ลบ" },
    ]);

    //Create Real time state

    convertActiveArrayForFilter.push(...props.ingredientActive, {
      idIngre: id,
      nameIngre: name,
      typeIngre: type,
      delete: "ลบ",
    });

    props.handleFilterWholeRecipe(convertActiveArrayForFilter);
  };

  //Return Html

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
