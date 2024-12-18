'use client'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { sendSignInLinkToEmail } from "@firebase/auth"
import { auth, db } from "@/firebase/setup"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

const SignInEmail = () => {
    const [email, setEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const actionCodeSettings = {
        url: 'http://localhost:3000/auth/verify',
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios',
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12',
        },
        dynamicLinkDomain: 'bakebrlk.page.link',
    };

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsLoading(false);
            return;
        }

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);

            window.localStorage.setItem('emailForSignIn', email);

            const userRef = doc(db, "users", email);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                await setDoc(userRef, {
                    email,
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString(),
                });
            } else {
                await updateDoc(userRef, {
                    lastLogin: new Date().toISOString(),
                });
            }
        } catch (error: any) {
            alert(error.message || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={register}
            className="border mx-4 w-[500px] items-center rounded-lg h-[max-content] bg-white/70 py-10 px-6 sm:px-8 gap-5 flex flex-col"
        >
            <Link href={'/'} className="flex gap-4 items-center mb-5">
                <Image
                    src="/assets/images/logo/logo.png"
                    width={50}
                    height={50}
                    alt="Zhanshuak logo"
                    className="rounded-xl object-cover"
                />
                <h1 className="font-bold uppercase text-2xl">zhanshuak</h1>
            </Link>
            <input
                className="p-2 rounded-lg border bg-slate-100 w-full focus:outline-primary"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                value={email}
            />
            <button
                type="submit"
                disabled={isLoading}
                className={`flex w-full justify-center bg-primary rounded-lg py-2 text-white font-semibold ${isLoading ? 'opacity-45' : ''}`}
            >
                {isLoading ? 'Loading...' : 'Sign in'}
            </button>
        </form>
    );
};

export default SignInEmail;
