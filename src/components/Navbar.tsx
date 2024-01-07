import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem 1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
`;

const NavLinks = styled.div`
  & > * {
    margin-left: 1rem;
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
