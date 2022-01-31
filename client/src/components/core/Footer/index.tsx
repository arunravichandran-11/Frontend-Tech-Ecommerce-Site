import React from "react";

import styled from "@emotion/styled";

const StyledFooter = styled.div`
  height: 48px;
  line-height: 48px;
  width: 100%;
  overflow: hidden;
`;

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}
const Footer = ({ className, children }: FooterProps) => {
  return <StyledFooter className={className}>{children}</StyledFooter>;
};

export default Footer;
