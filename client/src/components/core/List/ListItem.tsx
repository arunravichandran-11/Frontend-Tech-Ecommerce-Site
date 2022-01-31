import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledListItem = styled.li`
  padding: 8px;
  line-height: 32px;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgb(30, 33, 34);
    width: 100%;
    display: inline-block;
  }
`;

interface ListItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: any) => void;
}

const ListItem = ({ children, href, onClick }: ListItemProps) => {
  return (
    <StyledListItem onClick={onClick}>
      <NavLink to={`/${href}`}>{children}</NavLink>
      {/* <a href={`/${href}`}>{children}</a> */}
    </StyledListItem>
  );
};

export default ListItem;
