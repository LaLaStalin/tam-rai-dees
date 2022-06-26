import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { ButtonMenuIngredientType } from "../../components/Button/index";
import { MenuIngredient } from "../../util/staticData";
import Pagination from "@mui/material/Pagination";
import CardIngredientByType from "./cardIngredient";

import {
  materialMeat,
  materialSea,
  materialVegetable,
  materialFruit,
  materialEggMilkButterCheese,
  materialFrozen,
  materialMeatTransform,
  materialDry,
} from "../../util/staticData";

const ContainerIngredientMenu = styled.section`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 var(--pLR);
  display: flex;
  justify-content: center;
  height: auto;

  @media screen and (max-width: 1080px) {
    height: auto;
    margin: 50px 0;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .box-have-ingredient {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-theme);
    padding: 12px 16px;
    height: fit-content;
    margin-right: 30px;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    /* border-radius: 8px; */

    @media screen and (max-width: 1080px) {
      width: 98%;
      margin-right: 0;
    }

    & > h3 {
      font-size: var(--txt-sub);
      font-weight: 550;
      margin-bottom: 10px;
      color: var(--txt-theme);
    }

    .del-whole-ingre {
      text-align: center;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: 10px;
      cursor: pointer;

      & > p {
        border: 1px solid red;
        padding: 5px;
        color: gray;
        border-radius: 6px;
        width: 80px;
        font-size: var(--txt-primary);
      }
    }

    .have-ingredient {
      color: gray;
      display: flex;
      justify-content: space-between;
      font-size: var(--txt-primary);

      &:hover {
        /* background-color: #fafafa; */
        background-color: #f4f4f4;

        &:hover > li {
          color: var(--txt-theme);
          cursor: pointer;

          /* font-weight: bold; */
        }
        &:hover > p {
          color: red;
          cursor: pointer;
        }
      }
    }
  }

  .wrapper-ingredient-type {
    display: grid;
    justify-items: center;
    grid-gap: 40px;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(2, 40px);
    @media screen and (max-width: 1080px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    }
  }
`;

const ContainerCard = styled.section`
  & > div {
    display: grid;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: ${(props) =>
      props.ingredientActive.length >= 8
        ? "repeat(4, 210px)"
        : "repeat(5, 210px)"};

    @media screen and (max-width: 1080px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    }
  }
`;

const StackPagination = styled.div`
  max-width: var(--w-screen);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 var(--pLR);
  margin-top: 30px;

  .pagination {
    background: var(--bg-theme);
  }
`;

const listIngredientCardByType = [
  { valuesListIngredient: materialMeat, typeName: "Meat" },
  { valuesListIngredient: materialSea, typeName: "Sea" },
  { valuesListIngredient: materialVegetable, typeName: "Vet" },
  { valuesListIngredient: materialFruit, typeName: "Fruit" },
  { valuesListIngredient: materialEggMilkButterCheese, typeName: "Egg" },
  { valuesListIngredient: materialFrozen, typeName: "Frozen" },
  { valuesListIngredient: materialMeatTransform, typeName: "Transform" },
  { valuesListIngredient: materialDry, typeName: "Dry" },
];

const IngredientMenu = () => {
  const [menuIngredientActive, setMenuIngredientActive] = useState("Meat");
  const [ingredientActive, setIngredientActive] = useState([]);

  //ที่ต้องใช้คู่กับ pagination
  // จำนวนหน้า
  const [defaultPagination, setDefaultPagination] = useState(1);

  const [ingredientPerPage, setIngredientPerpage] = useState(10);

  const [lengthOfIngredeint, setLengthOfIngredient] = useState(
    materialMeat.length / ingredientPerPage
  );
  //จัดขนาดของข้อมูล
  const [indexLastIngredient, setIndexLastIngredient] = useState(
    1 * ingredientPerPage
  );
  const [indexFirstIngredient, setIndexFirstIngredient] = useState(
    indexLastIngredient - ingredientPerPage
  );

  //เอาไว้ set ค่าให้กับ first index และ last index เพื่อจัดการกับข้อมูลใน array
  const handlePagination = useCallback(
    (event, page) => {
      console.log(page);
      const indexOfLastIngre = parseInt(page) * ingredientPerPage; //10
      const indexOfFirstIngre = indexOfLastIngre - ingredientPerPage; // 10 - 10 = 0
      setIndexLastIngredient(() => indexOfLastIngre);
      setIndexFirstIngredient(() => indexOfFirstIngre);
      setDefaultPagination(parseInt(page));
    },
    [indexFirstIngredient, indexLastIngredient]
  );

  const handleMenuChange = useCallback(
    (keyword) => {
      setMenuIngredientActive(keyword);
      console.log("key: ", keyword);
      //CARD INGREDIENTS
      if (keyword === "Meat")
        setLengthOfIngredient(materialMeat.length / ingredientPerPage);
      if (keyword === "Sea")
        setLengthOfIngredient(materialSea.length / ingredientPerPage);
      if (keyword === "Vet")
        setLengthOfIngredient(materialVegetable.length / ingredientPerPage);
      if (keyword === "Fruit")
        setLengthOfIngredient(materialFruit.length / ingredientPerPage);
      if (keyword === "Egg") {
        setLengthOfIngredient(
          materialEggMilkButterCheese.length / ingredientPerPage
        );
      }
      if (keyword === "Frozen")
        setLengthOfIngredient(materialFrozen.length / ingredientPerPage);
      if (keyword === "Transform") {
        setLengthOfIngredient(materialMeatTransform.length / ingredientPerPage);
      }
      if (keyword === "Dry")
        setLengthOfIngredient(materialDry.length / ingredientPerPage);

      setIndexLastIngredient(1 * ingredientPerPage);
      setIndexFirstIngredient(indexLastIngredient - ingredientPerPage);
      setDefaultPagination(1);
    },
    [menuIngredientActive]
  );

  const handleDeleteIngredientChosen = (id) => {
    const newArrayActive = [...ingredientActive];
    const findIndex = newArrayActive.findIndex(
      (object) => object.idIngre === id
    );
    newArrayActive.splice(findIndex, 1);
    setIngredientActive(newArrayActive);
  };

  const renderCardIngredients = () => {
    return (
      <>
        {/*CARD INGREDIENTS*/}

        <ContainerCard ingredientActive={ingredientActive}>
          {listIngredientCardByType.map((items) => (
            <div key={items.typeName}>
              {menuIngredientActive === items.typeName && (
                <CardIngredientByType
                  key={items.typeName}
                  type={items.typeName}
                  arrayIngredient={items.valuesListIngredient}
                  ingredientActive={ingredientActive}
                  setIngredientActive={setIngredientActive}
                  //PROPS FOR PAGINATION
                  indexLast={indexLastIngredient}
                  indexFirst={indexFirstIngredient}
                />
              )}
            </div>
          ))}
        </ContainerCard>

        <StackPagination>
          <Pagination
            count={Math.ceil(lengthOfIngredeint)}
            shape="rounded"
            showFirstButton
            showLastButton
            page={defaultPagination}
            onChange={handlePagination}
          />
        </StackPagination>
      </>
    );
  };

  return (
    <>
      <ContainerIngredientMenu>
        {/*BOX CHOSEN*/}
        <div className="box-have-ingredient">
          <h3>วัตถุดิบที่เลือก</h3>
          {ingredientActive.length < 1 ? (
            <p style={{ color: "gray", margin: "20px 0", textAlign: "center" }}>
              เลือกวัตถุดิบกันเถอะ!
            </p>
          ) : (
            <>
              {ingredientActive.map((items) => (
                <div className="have-ingredient" key={items.idIngre}>
                  <li>{items.nameIngre}</li>
                  <p
                    onClick={() => handleDeleteIngredientChosen(items.idIngre)}
                  >
                    {items.delete}
                  </p>
                </div>
              ))}
              <p
                style={{
                  display: "flex",
                  justifyContent: "right",
                  color: "salmon",
                  cursor: "pointer",
                }}
                onClick={() => setIngredientActive([])}
              >
                clean
              </p>
            </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            width: "100%",
          }}
        >
          {/*MENU-INGREDIENTS*/}
          <div className="wrapper-ingredient-type">
            {MenuIngredient.map((items) => (
              <ButtonMenuIngredientType
                iconIngredientType={items.icon}
                key={items.name}
                keyword={items.keyword}
                active={menuIngredientActive}
                onClicked={() => handleMenuChange(items.keyword)}
              >
                {items.name}
              </ButtonMenuIngredientType>
            ))}
          </div>
          {/*CARD INGREDIENTS*/}
          {ingredientActive.length >= 8 && renderCardIngredients()}
        </div>
      </ContainerIngredientMenu>
      {ingredientActive.length < 8 && renderCardIngredients()}
    </>
  );
};

export default IngredientMenu;
