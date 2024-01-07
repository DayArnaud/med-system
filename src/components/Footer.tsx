import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const FooterContainer = styled.footer`
  position: relative;
  border-top: 0.5px solid #00b37e;
  margin-top: 12rem;
  border: 1px solid red;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: #888;
  }
`;

const NavLinks = styled.div`
  & > * {
    width: 32.7rem;
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
        <SocialLink
          href="https://www.facebook.com/lacrei.saude/"
          target="_blank"
        >
          <Image
            src={"./assets/FacebookLogo.svg"}
            alt="Facebook"
            width={32}
            height={32}
          />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank"
        >
          <Image
            src={"./assets/InstagramLogo.svg"}
            alt="Instagram"
            width={32}
            height={32}
          />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/company/lacrei-saude/"
          target="_blank"
        >
          <Image
            src={"./assets/LinkedinLogo.svg"}
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </SocialLink>
      </SocialMediaLinks>
      <FooterText>Desafio Front-end Lacrei</FooterText>
    </FooterContainer>
  );
};

export default Footer;
