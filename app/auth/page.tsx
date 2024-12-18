'use client'
import SignIn from '@/components/auth/SignIn';
import {useState} from "react";
import SignInEmail from "@/components/auth/SignInEmail";

export default function Auth() {
    const [isEmail, setIsEmail] = useState(false)
    return (
        <div className='flex justify-center w-full pt-52 min-h-[100vh]'>
            {
                !isEmail ? <SignIn setIsEmail={setIsEmail}/> : <SignInEmail/>
            }
        </div>
    );
}
