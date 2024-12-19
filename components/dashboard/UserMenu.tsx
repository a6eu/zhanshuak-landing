'use client';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/setup';
import React from 'react';



const UserMenu:React.FC = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/auth');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    return (
        <div className="border bg-white text-black shadow absolute z-40 top-24 p-3 rounded right-5">
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default UserMenu