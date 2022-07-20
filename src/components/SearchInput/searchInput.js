import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const BoxInputSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 var(--pLR);
  width: ${(props) => props.w};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  background-color: var(--bg-theme);
  color: var(--txt-theme);
  box-shadow: ${({ shadow }) =>
    shadow ? shadow : "0px 2px 10px rgba(0, 0, 0, 0.3)"};

  .search-icon {
    color: gray;
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
`;

const InputSearch = styled.input`
  width: 100%;
  background-color: var(--bg-theme);
  padding: 12px 10px 12px 32px;
  border-radius: ${({ radius }) => (radius ? radius : "50px")};
`;

const SearchInput = (props) => {
  return (
    <BoxInputSearch radius={props.radius} w={props.w} shadow={props.shadow}>
      <GoSearch className="search-icon" />
      <InputSearch
        radius={props.radius}
        onKeyDown={props.onKeyDown}
        type="text"
        name="search"
        placeholder="ค้นหาจากชื่อเมนู, พาสต้าอกไก่ครีมซอส, ..."
      />
    </BoxInputSearch>
  );
};

export default SearchInput;
