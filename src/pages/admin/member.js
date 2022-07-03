import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonPrimary, ButtonCancel } from "../../components/Button";
import { AuthContext } from "../../util/context";

const ContainerMember = styled.div`
  padding: 40px;
  height: ${(props) => (props.rowsPerPage === 5 ? "400px" : "650px")};
`;

export const Header = styled.h1`
  font-size: 40px;
  margin: 20px 0;
  color: var(--txt-theme);
`;

const Member = () => {
  const [listMember, setListMember] = useState([]);
  const [refreshMemberWhenDelete, setRefreshMemberWhenDelete] = useState(null);
  const { setUser } = AuthContext();
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const addListMember = () => {
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
        console.log("list Members:", rows);
        setListMember(rows);
      });
  };

  useEffect(() => {
    addListMember();
  }, [refreshMemberWhenDelete]);

  const onDelete = (id) => {
    console.log("Holaaaaaaa:", id);
    axios
      .post(`http://localhost/tamraidee-api/user/deleteUser.php`, {
        user_id: id,
      })
      .then((res) => {
        if (res.data.success) {
          const newArrayListMember = [...listMember];
          const findIndex = newArrayListMember.findIndex(
            (object) => object.id === id
          );
          newArrayListMember.splice(findIndex, 1);
          setRefreshMemberWhenDelete(newArrayListMember.length);
          alert(res.data.msg);
        }
      });
  };

  return (
    <ContainerMember rowsPerPage={rowsPerPage}>
      <Header>Member</Header>
      <DataGrid
        rows={listMember}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        onPageSizeChange={(newPagesize) => setRowsPerPage(newPagesize)}
        onCellClick={(params) => {
          if (params.field === "edit") {
            console.log("params.row", params.row);
          }
          if (params.field === "delete") {
            console.log("params.row", params.row);
            onDelete(params.row.id);
          }
        }}
      />
    </ContainerMember>
  );
};

export default Member;
