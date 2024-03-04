"use client";
import React from "react";
import Header from "../../components/Header"

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
        <title>100 Devs</title>
    </head>
    <body>
        <Header/>
        {children}</body>
  
    </html>
  );
}
