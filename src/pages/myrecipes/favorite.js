import React, { useState, useCallback } from "react";
import CardMyRecipe from "../../components/Card/CardMyRecipe";
import { CardContainerMyRecipes } from "./recipes";
import Pagination from "@mui/material/Pagination";

const listMock = [
  {
    id: 1,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 2,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 3,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 4,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 5,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 6,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 7,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 8,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 9,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 10,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
  {
    id: 11,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "/images/recipes/myrecipe3.jpg",
  },
];

const Favorite = (props) => {
  const [listFavorite, setListFavorite] = useState(listMock);

  const [favoritePerPage, setFavoritePerpage] = useState(8);

  const [lengthOfFavorite, setLengthOfFavorite] = useState(
    listFavorite.length / favoritePerPage
  );
  const [indexLastFavorite, setIndexLastFavorite] = useState(
    1 * favoritePerPage
  );
  const [indexFirstFavorite, setIndexFirstFavorite] = useState(
    indexLastFavorite - favoritePerPage
  );

  const handlePagination = useCallback(
    (event, page) => {
      const indexOfLast = parseInt(page) * favoritePerPage; //10
      const indexOfFirst = indexOfLast - favoritePerPage; // 10 - 10 = 0
      setIndexLastFavorite(() => indexOfLast);
      setIndexFirstFavorite(() => indexOfFirst);
    },
    [indexFirstFavorite, indexLastFavorite]
  );

  return (
    <>
      <CardContainerMyRecipes>
        {listFavorite
          .slice(indexFirstFavorite, indexLastFavorite)
          .map((items) => (
            <CardMyRecipe
              key={items.id}
              keyword={items.id}
              recipeName={items.name}
              recipeDescription={items.description}
              src={items.src}
            />
          ))}
      </CardContainerMyRecipes>
      <Pagination
        count={Math.ceil(lengthOfFavorite)}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handlePagination}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      />
    </>
  );
};

export default Favorite;
