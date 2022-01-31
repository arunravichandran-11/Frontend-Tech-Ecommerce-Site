import React from "react";
import styled from "@emotion/styled";

const ButtonSize = "48px";

const StyledIconButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${ButtonSize};
  min-height: ${ButtonSize};
  box-sizing: border-box;
  border: none;
  outline: none;
  color: #565d60;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  font-size: 24px;
  margin: 0px 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  &:active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }

  span,
  label {
    font-size: 12px;
    width: max-content;
    padding: 2px 12px;
  }
`;

interface IconButtonProps {
  children: React.ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const IconButton = ({ children, onClick, label }: IconButtonProps) => {
  return (
    <StyledIconButton onClick={onClick}>
      {children}
      <span>{label}</span>
    </StyledIconButton>
  );
};

export default IconButton;
