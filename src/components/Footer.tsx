"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FooterContainer = styled.footer`
  position: relative;
  border-top: 0.5px solid #00b37e;
  margin: 1rem 5rem 0 9rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
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
  gap: 2rem;
  margin-top: 2rem;
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const NavLink = styled.span<{ $isActive: boolean }>`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: ${({ $isActive }) => ($isActive ? "700" : "400")};
  line-height: normal;
  transition: opacity 0.2s ease;
  text-decoration: none;

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
  const pathname = usePathname();

  return (
    <FooterContainer>
      <NavLinks>
        <Link href={"/"} passHref>
          <NavLink $isActive={pathname === "/"}>Home</NavLink>
        </Link>
        <Link href={"/user"} passHref>
          <NavLink $isActive={pathname === "/user"}>Pessoa Usuária</NavLink>
        </Link>
        <Link href={"/professional"} passHref>
          <NavLink $isActive={pathname === "/professional"}>
            Profissional
          </NavLink>
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
