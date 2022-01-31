import styled from "@emotion/styled";
import React from "react";

interface SideBarProps {
  title?: string;
  children: React.ReactNode;
}

const StyledSidebar = styled.div`
  background-color: #fff;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.14);
`;

const SideBar = ({ title, children }: SideBarProps) => {
  return (
    <StyledSidebar className="sidebar">
      <h3>{title}</h3>
      {children}
    </StyledSidebar>
  );
};

export default SideBar;
