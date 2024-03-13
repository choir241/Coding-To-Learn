"use client";
import React from "react";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/300.css";
import "../css/global.css";
import "../css/mobile.css";
import Search from "../components/Search";
import style from "../css/main.module.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn How To Code</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
