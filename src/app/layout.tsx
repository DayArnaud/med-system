"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={defaultTheme}>
          {children}
          <GlobalStyled />
        </ThemeProvider>
      </body>
    </html>
  );
}
