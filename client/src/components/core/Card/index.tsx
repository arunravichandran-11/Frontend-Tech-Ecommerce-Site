import React from "react";
import styled from "@emotion/styled";

interface CardImage {
  image: string;
  alt: string;
}

const CardImage = ({ image, alt }: CardImage) => {
  return <img src={image} alt={alt} style={{ width: "100%" }} />;
};

interface CardSummary {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const StyledCardSummary = styled.div`
  padding: 8px;
  box-sizing: border-box;
`;

const CardSummary = ({ title, children }: CardSummary) => {
  return (
    <StyledCardSummary>
      <div>{title}</div>
      {children}
    </StyledCardSummary>
  );
};

interface CardAction {
  children: JSX.Element;
}

const CardAction = ({ children }: CardAction) => {
  return <div style={{ padding: 8, boxSizing: "border-box" }}>{children}</div>;
};

const StyledCard = styled.div`
  padding: 0;
  background-color: #f8f8f8;
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgb(0, 0, 0, 0.25),
    0px 1px 1px 0px rgb(0, 0, 0, 0.14), 0px 1px 3px 0px rgb(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    margin: 0;
    padding: 0;
  }
`;

interface Card {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: Card) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export { CardAction, CardImage, CardSummary };
export default Card;
