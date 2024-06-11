import React from 'react';
import {MySectionItemProps} from './MySectionItem.types';
import MyText from '../MyText/MyText';
import styled from 'styled-components';

const StyledSectionItem = styled.div<{ Disabled?: boolean }>`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
 opacity: ${({ Disabled }) => ( Disabled ? 0.2 : 1)};
`



const MySectionItem: React.FC<MySectionItemProps> = ({Image, HeaderText, BodyText, Disabled = false}) => {
 return (
  <StyledSectionItem Disabled={Disabled}>
   <MyText text={HeaderText} size="large" bold></MyText>
   {Image}
   <MyText text={BodyText}></MyText>
  </StyledSectionItem>
 );
};

export default MySectionItem;

