
'use client';
import localFont from 'next/font/local';
import './globals.css';
import React from "react";
import { Provider } from 'react-redux';
import store from "@/redux/store";
import {AuthProvider} from "@/context/AuthContext";

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
            <Provider store={store}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </Provider>
            </body>
        </html>
    );
}
