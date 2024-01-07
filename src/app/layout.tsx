"use client";

import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

const inter = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
          {children}
          <GlobalStyled />
        </ThemeProvider>
      </body>
    </html>
  );
}
