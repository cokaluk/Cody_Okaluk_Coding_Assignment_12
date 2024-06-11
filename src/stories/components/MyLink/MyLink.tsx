import React from "react";
import styled, { css } from "styled-components";
import { MyLinkProps } from "./MyLink.types";


const StyledLink = styled.a<{float?: 'right' | 'left'; disabled?: boolean; hover?: boolean }>`
text-decoration: none;
color: ${({ disabled }) => (disabled ? 'gray' : 'blue')};
pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
float: ${({ float }) => ( float ? float : 'right')};
${({ hover }) =>
 hover &&
 css`
  &:hover {
   text-decoration: underline;
   color: darkblue;
  }
 `}
`;

const MyLink: React.FC<MyLinkProps> = ({href, linkText, float, disabled, hover}) => {
 return (
  <StyledLink href={href} float={float} disabled={disabled} hover={hover}>
   {linkText}
  </StyledLink>
 );
};

export default MyLink;