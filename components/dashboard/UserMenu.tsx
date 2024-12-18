'use client';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/setup';

const UserMenu = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out the user
            router.push('/auth'); // Redirect to the login page or home
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    return (
        <div className="border bg-white text-black shadow absolute top-24 p-3 rounded right-5">
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default UserMenu