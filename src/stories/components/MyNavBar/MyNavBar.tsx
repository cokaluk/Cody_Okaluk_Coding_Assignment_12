import React from "react";
import styled from "styled-components";
import MyLink from "../MyLink/MyLink";
import { MyNavBarProps } from "./MyNavBar.types";

const StyledNavBar = styled.nav<{ stationairy?: boolean; disabled?: boolean }>`
background-color: ${({ disabled }) => (disabled ? '#808080' : '#00ff00')};
position: ${({ stationairy }) => ( stationairy ? 'fixed' : 'relative')};
top: 0;
width: 100%;
opacity: ${({ disabled }) => ( disabled ? 0.2 : 1)};
`;

const MyNavBar: React.FC<MyNavBarProps> = ({ stationairy, disabled, links }) => {
 return (
  <StyledNavBar stationairy={stationairy} disabled={disabled}>
   {links.map((link, index) =>
   <div key = {index}>{link}</div>
   )}
  </StyledNavBar>
 );
};

export default MyNavBar;
