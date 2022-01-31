import React from "react";
import styled from "@emotion/styled";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return (
    <div>
      <StyledList>{children}</StyledList>
    </div>
  );
};

export default List;
