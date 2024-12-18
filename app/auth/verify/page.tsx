'use client';
import { useEffect, useState } from 'react';
import { auth, db } from '@/firebase/setup';
import { signInWithEmailLink } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
    const [status, setStatus] = useState<string>('Verifying...');
    const router = useRouter();

    useEffect(() => {
        const handleSignIn = async () => {
            if (!auth.isSignInWithEmailLink(window.location.href)) {
                setStatus('Invalid sign-in link.');
                return;
            }

            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                email = prompt('Please enter your email for verification');
            }

            if (!email) {
                setStatus('No email provided.');
                return;
            }

            try {
                const result = await signInWithEmailLink(auth, email, window.location.href);

                window.localStorage.removeItem('emailForSignIn');

                const userRef = doc(db, 'users', email);
                const userSnap = await getDoc(userRef);

                if (!userSnap.exists()) {
                    setStatus('User not authorized. Please contact support.');
                    return;
                }

                await updateDoc(userRef, {
                    lastLogin: new Date().toISOString(),
                });

                setStatus('Sign-in successful. Redirecting...');
                router.push('/dashboard');
            } catch (error: any) {
                console.error('Error signing in:', error);
                setStatus(error.message || 'Failed to sign in.');
            }
        };

        handleSignIn();
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">{status}</h1>
        </div>
    );
};

export default AuthPage;
