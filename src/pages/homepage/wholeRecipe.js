import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { CardRecipe } from "../../components/Card";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

const ListRecipe = [
  {
    id: 1,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 2,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 3,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 4,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 5,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 6,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 7,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 8,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 9,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 10,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 11,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 12,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 13,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 14,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 15,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
  {
    id: 16,
    like: 25,
    nameRecipe: "ไข่อบซอสมะเขือเทศ",
    writer: "ชลลดา นาเจริญ",
    description:
      "อาหารอิตาเลียนใช่ว่าจะต้องเลี่ยนเสมอไป แถมยังดีต่อสุขภาพแบบทำเองง่ายๆที่บ้านด้วย พาสต้าอกไก่ครีมซอส เพิ่มประโยชน์ด้วยผักเคล (Kale) ตัดเลี่ยนด้วยรสอมเปรี้ยวของมะเขือเทศเชอรี่",
    duration: "15",
  },
];

const ContainerWholeRecipe = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--pLR);
  color: var(--txt-theme);

  .header-whole-recipe {
    margin-bottom: 20px;
    font-size: var(--txt-sub);

    & > span {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-food {
        font-size: 48px;
      }
    }

    & > p {
      color: gray;
    }
  }
`;

const WholeRecipe = () => {
  const navigate = useNavigate();

  const [listRecipe, setListRecipe] = useState([]);
  const [ingredientPerPage] = useState(8);

  const [lengthOfIngredeint, setLengthOfIngredient] = useState(
    listRecipe.length / ingredientPerPage
  );
  const [indexLastIngredient, setIndexLastIngredient] = useState(
    1 * ingredientPerPage
  );
  const [indexFirstIngredient, setIndexFirstIngredient] = useState(
    indexLastIngredient - ingredientPerPage
  );

  const handlePagination = useCallback(
    (event, page) => {
      const indexOfLastIngre = parseInt(page) * ingredientPerPage; //10
      const indexOfFirstIngre = indexOfLastIngre - ingredientPerPage; // 10 - 10 = 0
      setIndexLastIngredient(() => indexOfLastIngre);
      setIndexFirstIngredient(() => indexOfFirstIngre);
    },
    [indexFirstIngredient, indexLastIngredient]
  );

  const handleRecipeClicked = (id) => {
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    setListRecipe(ListRecipe);
    setLengthOfIngredient(listRecipe.length / ingredientPerPage);
  }, [listRecipe]);

  return (
    <ContainerWholeRecipe>
      <div className="header-whole-recipe">
        <span>
          <Icon icon="emojione:pot-of-food" className="icon-food" />
          <h2>เมนูที่คุณสามารถทำได้ !!</h2>
        </span>

        <p>เมนูอาหารที่เกี่ยวข้องกับวัตถุดิบที่คุณเลือกหรือที่คุณค้นหา. . .</p>
      </div>
      {listRecipe
        .slice(indexFirstIngredient, indexLastIngredient)
        .map((recipe) => (
          <CardRecipe
            key={recipe.id}
            id={recipe.id}
            like={recipe.like}
            nameRecipe={recipe.nameRecipe}
            writer={recipe.writer}
            description={recipe.description}
            duration={recipe.duration}
            onClicked={() => handleRecipeClicked(recipe.id)}
          />
        ))}
      <Pagination
        count={Math.ceil(lengthOfIngredeint)}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handlePagination}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      />
    </ContainerWholeRecipe>
  );
};

export default WholeRecipe;
