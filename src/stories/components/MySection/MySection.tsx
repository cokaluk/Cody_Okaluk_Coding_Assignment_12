import React from "react";
import MySectionItem from "../MySectionItem/MySectionItem";
import MyText from "../MyText/MyText";
import {MySectionProps} from "../MySection/MySection.types";
import styled from 'styled-components';

const StyledSection = styled.section<{ disabled?: boolean }>`
 opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
 `;


const MySection: React.FC<MySectionProps> = ({Header, SectionItems, disabled = false }) => {
 return (
  <StyledSection disabled={disabled}>
   <div><MyText text={Header} size="large" bold></MyText></div>
   {SectionItems.map((SectionItem, index) => (
    <div key={index}>
     {SectionItem}
    </div>
   ))}
  </StyledSection>
 );
};


export default MySection;