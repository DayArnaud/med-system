"use client";

import React from "react";
import styled, { css } from "styled-components";
import LinkButton from "./LinkButton";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  hasBorder?: boolean;
  hasLinkButton?: boolean;
}

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 5rem 0;

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

const Description = styled.p<{ $hasBorder?: boolean }>`
  width: 52.1 rem;
  color: #515151;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3.2rem;

  ${({ $hasBorder }) =>
    $hasBorder &&
    css`
      padding-left: 2rem;
      border-left: 5px solid #018762;
      margin-top: 3.2rem;
    `}
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
  hasBorder = false,
  hasLinkButton = false,
}) => {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description $hasBorder={hasBorder}>{description}</Description>
        {hasLinkButton && (
          <>
            <LinkButton href="/user" variant="primary">
              Pessoa Usuária
            </LinkButton>
            <LinkButton href="/professional" variant="secondary">
              Profissional
            </LinkButton>
          </>
        )}
      </TextContainer>
      <StyledImage src={imageSrc} alt="Imagem ilustrativa" />
    </HeroContainer>
  );
};

export default HeroSection;
