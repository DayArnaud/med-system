import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  height: 6rem;
  padding-left: 5rem;
`;

const Logo = styled.h1`
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

const NavLinks = styled.div`
  & > * {
    width: 32.7rem;
    margin-right: 3rem;
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

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Link href={"/"} passHref>
        <Logo>Lacrei</Logo>
      </Link>
      <NavLinks>
        <Link href={"/"}>Home</Link>
        <Link href={"/user"} passHref>
          Pessoa Usuária
        </Link>
        <Link href={"/professional"}>Profissional</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
