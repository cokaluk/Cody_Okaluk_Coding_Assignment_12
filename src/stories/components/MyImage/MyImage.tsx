import React from 'react';
import {MyImageProps} from './MyImage.types';
import styled from 'styled-components';

const StyledImage = styled.img<MyImageProps>`
width: ${({width}) => width || 'auto'};
height: ${({height}) => height || 'auto'};
border-radius: ${({shape}) => (shape === 'circle' ? '50%' : '0')};
border: ${({shape}) => (shape === 'circle' ? '2px black solid' : '0')};
opacity: ${({disabled}) => (disabled ? '0.2' : 1)};
`


const MyImage: React.FC<MyImageProps> = ({src, alt, width = 200, height = 200, shape = "square", disabled = false}) => {
 const defaultAlt = 'a picture called ${src}';
 return <StyledImage src={src} alt={alt || defaultAlt} width={width} height={height} disabled={disabled} shape={shape}/>;
};

export default MyImage;