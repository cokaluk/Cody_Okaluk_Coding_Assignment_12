import React from 'react';
import {MyTextProps} from './MyText.types';
import styled from 'styled-components';


type StyledTextProps = Omit<MyTextProps, 'text'>;

const StyledText = styled.span<StyledTextProps>`
 font-size: ${({ size }) => {
  switch (size) {
   case 'large':
    return '1.5rem';
   case 'small':
    return '0.75rem';
   default:
    return '1rem';
  }
 }};
 font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
 color: ${({ disabled }) => (disabled ? 'gray' : 'inherit')};
`;

const MyText: React.FC<MyTextProps> = ({ text, size = "medium", bold = false, disabled = false}) => {
 return <StyledText size={size} bold={bold} disabled={disabled}>{text}</StyledText>;
};

export default MyText;