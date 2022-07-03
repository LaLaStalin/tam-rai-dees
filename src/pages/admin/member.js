import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonPrimary, ButtonCancel } from "../../components/Button";
const ContainerMember = styled.div`
  padding: 40px;
  height: 400px;
`;

export const Header = styled.h1`
  font-size: 40px;
  margin: 20px 0;
  color: var(--txt-theme);
`;

const Member = () => {
  const [listMember, setListMember] = useState([]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "user_firstname",
      headerName: "Firstname",
      width: 200,
    },
    {
      field: "user_lastname",
      headerName: "Lastname",
      width: 200,
    },
    {
      field: "user_email",
      headerName: "Email",
      sort: "disabled",
      width: 200,
    },
    {
      field: "user_datetime",
      headerName: "Date",
      sort: "disabled",
      width: 150,
    },
    {
      field: "user_urole",
      headerName: "Role",
      width: 100,
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
      .get("http://localhost/tamraidee-api/user/fetchAllUser.php")
      .then((res) => {
        console.log("res: ", typeof res.data.dataUser);
        const rows = res.data.dataUser.map((users) => ({
          id: users.user_id,
          user_firstname: users.user_firstname,
          user_lastname: users.user_lastname,
          user_email: users.user_email,
          user_datetime: users.user_datetime,
          user_urole: users.user_urole,
        }));
        console.log("rowsss:", rows);
        setListMember(rows);
      });
  }, []);

  return (
    <ContainerMember>
      <Header>Member</Header>
      <DataGrid
        rows={listMember.map((users) => ({
          id: users.id,
          user_firstname: users.user_firstname,
          user_lastname: users.user_lastname,
          user_email: users.user_email,
          user_datetime: users.user_datetime,
          user_urole: users.user_urole,
        }))}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onCellClick={(params) => {
          if (params.field === "edit") {
            console.log(params.row);
          }
        }}
      />
    </ContainerMember>
  );
};

export default Member;
