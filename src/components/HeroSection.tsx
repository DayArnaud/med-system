import React from "react";
import styled from "styled-components";

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f8f8f8;
`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #333;
`;

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <HeroContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HeroContainer>
  );
};

export default HeroSection;
