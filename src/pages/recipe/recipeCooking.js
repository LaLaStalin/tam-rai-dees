import React from "react";
import styled from "styled-components";
import { RecipeInfoContainer } from "./recipeIngredient";
import { Icon } from "@iconify/react";

const listCooking = [
  {
    id: 1,
    step: "เทน้ำมันพืชลงในกระทะ ตั้งไฟปานกลง รอจนน้ำมันร้อนตอกไข่ไก่ใส่ลงไป ทอดจนกระทั่งสุกได้ที่ นำมาพักไว้",
  },
  {
    id: 2,
    step: "หั่นพริก ปอกกระเทียมสับพอหยาบๆ",
  },
  {
    id: 3,
    step: "ใช้น้ำมันที่เหลือจากการทอดไข่ตั้งไฟปานกลาง ใส่พริกกับกระเทียม ผัดให้มีกลิ่นหอม",
  },
  {
    id: 4,
    step: "ใส่หมูสับลงไป ผัดพอสุก ปรุงรสด้วยน้ำปลา น้ำมันหอย ซีอิ๊ว ใส่น้ำเปล่าเล็กน้อย จากนั้นใส่ใบกะเพรา ผัดสักครู่",
  },
  {
    id: 5,
    step: "จัดกะเพราหมูใส่ลงจาน แต่งด้วยใบกะเพรา พร้อมเสิร์ฟ",
  },
];

const WrrapperRecipeCooking = styled.div`
  & > h1 {
    font-size: 22px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: var(--main-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .duration-recipe {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;
    top: 15px;
    right: 30px;
    font-size: var(--txt-sub);
    font-weight: bold;
    color: var(--txt-theme);
  }

  .time-icon {
    font-size: 20px;
  }

  .list-cooking-recipe {
    display: grid;
    grid-template-columns: 50px auto;
    padding: 20px 0;
    color: var(--txt-theme);
    font-size: var(--txt-sub);
    font-weight: bold;
    width: 100%;

    .index-box {
      background: lightgray;
      width: 35px;
      height: 35px;
      font-size: var(--txt-sub);
      font-weight: bold;
      border-radius: 8px;
      color: var(--bg-theme);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const RecipeCooking = () => {
  return (
    <RecipeInfoContainer>
      <WrrapperRecipeCooking>
        <div className="duration-recipe">
          <p
            style={{
              color: "lightgray",
              fontSize: "var(--txt-primary)",
              fontWeight: "400",
              marginRight: "5px",
            }}
          >
            เวลาทำอาหาร
          </p>
          <Icon
            icon="icon-park-outline:time"
            className="time-icon"
            color="var(--txt-theme)"
          />
          <p>15 นาที</p>
        </div>
        <h1>วิธีทำ</h1>
        {listCooking.map((items, index) => (
          <div className="list-cooking-recipe" key={items.id}>
            <span className="index-box">
              <p>{index + 1}</p>
            </span>
            <p>{items.step}</p>
          </div>
        ))}
      </WrrapperRecipeCooking>
    </RecipeInfoContainer>
  );
};

export default RecipeCooking;
