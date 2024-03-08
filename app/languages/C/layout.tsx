"use client";
import React from "react";
import Header from "../../../components/LanguageHeader";

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
        <title>C#</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
