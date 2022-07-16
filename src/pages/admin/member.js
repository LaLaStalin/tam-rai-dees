import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonPrimary, ButtonCancel } from "../../components/Button";
import { AuthContext } from "../../util/context";
import { handleApiDeleteMember, addListMember } from "./apiAdmin";

const ContainerMember = styled.div`
  padding: 40px;
  height: ${(props) => (props.rowsPerPage === 5 ? "400px" : "650px")};
  padding-bottom: 150px;
`;

export const Header = styled.h1`
  font-size: 40px;
  margin: 20px 0;
  color: var(--txt-theme);
`;

const Member = (props) => {
  const [listMember, setListMember] = useState([]);
  const [refreshMemberWhenDelete, setRefreshMemberWhenDelete] = useState(null);
  const { apiUrl } = AuthContext();
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
      width: 150,
    },
    {
      field: "user_lastname",
      headerName: "Lastname",
      width: 150,
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
    addListMember(apiUrl, setListMember);
  }, [refreshMemberWhenDelete]);

  const onDelete = (id, username) => {
    handleApiDeleteMember(
      username,
      apiUrl,
      id,
      listMember,
      setRefreshMemberWhenDelete
    );
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
            props.setIsBtnAdmin("member-edit");
            props.setMemberSelected(params.row);
          }
          if (params.field === "delete") {
            console.log("params.row", params.row);
            onDelete(params.row.id, params.row.user_firstname);
          }
        }}
      />
    </ContainerMember>
  );
};

export default Member;
