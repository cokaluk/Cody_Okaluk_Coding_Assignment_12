import React from "react";
import styled from "styled-components";
import { MyHeroImageProps } from "./MyHeroImage.types";
import shareImage from '../../assets/share.png';

const StyledHeroImage = styled.img<MyHeroImageProps>`
opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
width: 100%;
height: 100%;
`;

const MyHeroImage: React.FC<MyHeroImageProps> = ({ src, alt, disabled = false}) => {
 const defaultAlt = 'a picture called ${src}';
 return <StyledHeroImage src={src} alt={alt || defaultAlt} disabled={disabled}/>;
}

export default MyHeroImage;
