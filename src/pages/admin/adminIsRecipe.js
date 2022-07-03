import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonPrimary, ButtonCancel } from "../../components/Button";
import { Header } from "./member";

const ContainerAdminIsRecipe = styled.div`
  padding: 40px;
  height: 650px;
`;

const AdminIsRecipe = () => {
  const [listMemberIsRecipe, setListMemberIsRecipe] = useState([]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 130,
    },
    // {
    //   field: "recipe_img",
    //   headerName: "รูปภาพ",
    //   width: 130,
    // },
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
      width: 150,
    },
    {
      field: "recipe_datetime",
      headerName: "Date",
      sort: "disabled",
      width: 150,
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
    axios
      .get("http://localhost/tamraidee-api/admin/fetchAdminIsRecipe.php")
      .then((res) => {
        console.log("res: ", typeof res.data.dataUser);
        const rows = res.data.dataUser.map((recipes) => ({
          id: recipes.recipe_id,
          recipe_name: recipes.recipe_name,
          recipe_description: recipes.recipe_description,
          user_firstname: recipes.user_firstname,
          user_lastname: recipes.user_lastname,
          recipe_datetime: recipes.recipe_datetime,
        }));
        console.log("list Member recipe:", rows);
        setListMemberIsRecipe(rows);
      });
  }, []);
  return (
    <ContainerAdminIsRecipe>
      <Header>Admin's Recipe</Header>
      <DataGrid
        rows={listMemberIsRecipe}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onCellClick={(params) => {
          if (params.field === "edit") {
            console.log(params.row);
          }
        }}
      />
    </ContainerAdminIsRecipe>
  );
};

export default AdminIsRecipe;
