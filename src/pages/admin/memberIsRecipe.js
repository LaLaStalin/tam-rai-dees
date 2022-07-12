import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonPrimary, ButtonCancel } from "../../components/Button";
import { Header } from "./member";
import { AuthContext } from "../../util/context";
import { useLocation, useNavigate } from "react-router";
import { handleDeleteRecipe, addListRecipe } from "./apiAdmin";

const ContainerMemberIsRecipe = styled.div`
  padding: 40px;
  height: 650px;
  padding-bottom: 150px;
`;

const MemberIsRecipe = () => {
  const [listMemberIsRecipe, setListMemberIsRecipe] = useState([]);
  const { apiUrl } = AuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [refreshRecipeWhenDelete, setRefreshRecipeWhenDelete] = useState(false);

  const columns = [
    {
      field: "recipe_id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "recipe_name",
      headerName: "ชื่อสูตรอาหาร",
      width: 150,
    },
    {
      field: "recipe_description",
      headerName: "คำอธิบาย",
      width: 200,
    },
    {
      field: "user_firstname",
      headerName: "ชื่อผู้เขียน",
      width: 150,
    },
    {
      field: "user_lastname",
      headerName: "นามสกุล",
      width: 140,
    },
    {
      field: "recipe_datetime",
      headerName: "Date",
      sort: "disabled",
      width: 110,
    },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <ButtonPrimary w="50px" h="30px" p="15px 30px">
            Edit
          </ButtonPrimary>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <ButtonCancel w="50px" h="30px" p="15px 30px">
            Delete
          </ButtonCancel>
        );
      },
    },
  ];

  useEffect(() => {
    addListRecipe(apiUrl, setListMemberIsRecipe);
  }, [refreshRecipeWhenDelete]);

  const onDelete = (recipe_id, recipe_name, recipe_img) => {
    handleDeleteRecipe(
      apiUrl,
      recipe_name,
      recipe_id,
      recipe_img,
      setRefreshRecipeWhenDelete
    );
  };

  return (
    <ContainerMemberIsRecipe>
      <Header>Member's Recipe</Header>
      <DataGrid
        rows={listMemberIsRecipe}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onCellClick={(params) => {
          if (params.field === "edit") {
            console.log("member's recipe onClick", params.row);
            console.log("location.state", location.state);
            axios
              .post(`${apiUrl}/recipe/cookingTagIngreById.php`, {
                id_user: null,
                id_recipe: params.row.recipe_id,
                id_writter: params.row.user_id,
              })
              .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  navigate(`/recipe/edit/${params.id}`, {
                    state: {
                      recipeIngredientFromState: res.data.dataIngre,
                      recipeCookingFromState: res.data.dataCooking,
                      recipeTagFromState: res.data.dataTag,
                      recipeFromState: params.row,
                      adminState: true, //recipe info of user
                    },
                  });
                }
              });
          }
          if (params.field === "delete") {
            onDelete(
              params.row.recipe_id,
              params.row.recipe_name,
              params.row.recipe_img
            );
          }
        }}
      />
    </ContainerMemberIsRecipe>
  );
};

export default MemberIsRecipe;
