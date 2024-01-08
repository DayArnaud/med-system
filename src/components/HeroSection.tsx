"use client";

import React from "react";
import styled from "styled-components";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  text-align: left;
`;

const Title = styled.h1`
  color: #1f1f1f;
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Description = styled.p`
  width: 52.1 rem;
  color: #515151;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 2rem;
  border-left: 5px solid #018762;
  margin-top: 3.2rem;
`;

const StyledImage = styled.img`
  max-width: 555px;
  width: 100%;
  margin: 0 10px;
`;

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <StyledImage src={imageSrc} alt="Imagem ilustrativa" />
    </HeroContainer>
  );
};

export default HeroSection;
