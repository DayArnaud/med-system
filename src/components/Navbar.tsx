"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #eee;
  height: 7rem;
  padding-left: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-left: 0;
  }
`;

const Logo = styled(Link)`
  color: #018762;
  cursor: pointer;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: opacity 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const NavLinksContainer = styled.div`
  width: 32.7rem;
  margin-right: 3rem;
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-right: 0;
  }
`;

const NavLink = styled.span<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#018762" : "#1f1f1f")};
  font-size: 1.6rem;
  font-weight: 700;
  transition: opacity 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  margin-right: 2rem;

  &:hover {
    opacity: 0.7;
  }
`;

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Nav>
      <Logo href={"/"} passHref>
        Lacrei
      </Logo>
      <NavLinksContainer>
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
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
