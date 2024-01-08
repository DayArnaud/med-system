"use client";

import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

const StyledLink = styled(Link)<{ $variant: "primary" | "secondary" }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 19.2rem;
  height: 4.8rem;
  flex-shrink: 0;
  margin-top: 5rem;
  margin-right: 7rem;
  border-radius: 0.8rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, opacity 0.2s ease;

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: #018762;
      color: #fff;

      &:hover {
        opacity: 0.7;
      }
    `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background-color: #fff;
      color: #018762;
      border: 2px solid #018762;

      &:hover {
        opacity: 0.7;
      }
    `}
`;

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  variant = "primary",
}) => {
  return (
    <StyledLink href={href} passHref $variant={variant}>
      {children}
    </StyledLink>
  );
};

export default LinkButton;
