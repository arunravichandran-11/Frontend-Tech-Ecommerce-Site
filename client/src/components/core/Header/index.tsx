import React from "react";
import styled from "@emotion/styled";
import brandLogo from "./home-24-logo.svg";
import IconButton from "../IconButton";

const StyledHeader = styled.div`
  height: 64px;
  background-color: skyblue;
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-weight: bold;
  position: sticky;
  top: 0px;
  padding: 0px 16px;
  box-sizing: border-box;
  & > div {
    height: 100%;
    display: flex;
  }
`;

const StyledLogo = styled.img`
  width: 90px;
  cursor: pointer;
`;

const StyledHeaderContentSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-left: 32px;
`;

interface HeaderIconInterface {
  name: string;
  icon?: JSX.Element;
  iconClassName?: string;
  label: string;
}

interface HeaderProps {
  logo?: string;
  className?: string;
  children?: React.ReactNode;
  rightIcons?: HeaderIconInterface[];
}

const Header = ({ logo, className, rightIcons, children }: HeaderProps) => {
  const renderHeaderIcons = (icons: HeaderIconInterface[]) => {
    return icons.map((item) => {
      const { iconClassName, icon, label, name } = item;

      // this line is required if handling icon element and icon class name in a single prop. - To Be analysed later.
      // const isNode = React.isValidElement(icon);
      return (
        <IconButton key={name} label={label}>
          {icon || <i className={iconClassName} />}
        </IconButton>
      );
    });
  };

  return (
    <StyledHeader className={className}>
      <div>
        <StyledLogo src={logo || brandLogo} alt="home24-logo" />
      </div>
      <StyledHeaderContentSection>
        {children}
        {rightIcons && renderHeaderIcons(rightIcons)}
      </StyledHeaderContentSection>
    </StyledHeader>
  );
};

export default Header;
