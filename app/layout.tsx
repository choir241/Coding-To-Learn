"use client";
import React from "react";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/300.css";
import "../css/global.css";
import "../css/mobile.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <title>Learn How To Code</title>
        <body>{children}</body>
    </html>
  );
}