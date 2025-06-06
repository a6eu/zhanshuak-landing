import localFont from 'next/font/local';
import './globals.css';
import React from "react";

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} antialiased`}>
            {children}
        </body>
        </html>
    );
}
