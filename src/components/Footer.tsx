"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const FooterContainer = styled.footer`
  position: relative;
  border-top: 0.5px solid #00b37e;
  margin: 1rem 5rem 0 9rem;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 2rem;
`;

const SocialIcon = styled(Link)`
  display: inline-block;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:nth-of-type(n + 2) {
    margin-left: 3rem;
  }

  &:hover {
    opacity: 0.5;
    transform: translateY(-2px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  & > * {
    color: #1f1f1f;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: opacity 0.2s ease;
    text-decoration: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const FooterText = styled.p`
  color: #515151;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <NavLinks>
        <Link href={"/"} passHref>
          Home
        </Link>
        <Link href={"/user"} passHref>
          Pessoa Usuária
        </Link>
        <Link href={"/professional"} passHref>
          Profissional
        </Link>
      </NavLinks>
      <SocialMediaLinks>
        <SocialIcon
          href="https://www.facebook.com/lacrei.saude/"
          target="_blank"
        >
          <Image
            src={"./assets/FacebookLogo.svg"}
            alt="Facebook"
            width={32}
            height={32}
          />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank"
        >
          <Image
            src={"./assets/InstagramLogo.svg"}
            alt="Instagram"
            width={32}
            height={32}
          />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/company/lacrei-saude/"
          target="_blank"
        >
          <Image
            src={"./assets/LinkedinLogo.svg"}
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </SocialIcon>
      </SocialMediaLinks>
      <FooterText>Desafio Front-end Lacrei</FooterText>
    </FooterContainer>
  );
};

export default Footer;
