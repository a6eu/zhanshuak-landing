'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import OtpInput from 'react-otp-input';
import { auth } from '@/firebase/setup';
import firebase from 'firebase/compat/app';
import PhoneInput from "@/components/inputs/PhoneInput";

declare global {
    interface Window {
        recaptchaVerifier: firebase.auth.RecaptchaVerifier | null;
    }
}

const SignIn = ({ setIsEmail }: { setIsEmail: (value: boolean) => void }) => {
    const [number, setNumber] = useState('');
    const [isSms, setIsSms] = useState(false);
    const [otp, setOtp] = useState<string>('');
    const [verificationId, setVerificationId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendCode = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formatNumber = "+" + number.replace(/\D/g, "")
        console.log(formatNumber);

        if (!formatNumber || !/^\+?[1-9]\d{1,14}$/.test(formatNumber)) {
            alert('Please enter a valid phone number.')
            return;
        }

        try {
            setIsLoading(true);

            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
                    'recaptcha-container',
                    {
                        size: 'invisible',
                        callback: () => {
                            console.log('ReCAPTCHA solved');
                        },
                        'expired-callback': () => {
                            alert('ReCAPTCHA expired. Please try again.');
                        },
                    }
                );
            }

            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await auth.signInWithPhoneNumber(formatNumber, appVerifier);

            setVerificationId(confirmationResult.verificationId);
            setIsSms(true);
        } catch (error: any) {
            console.error('Error during sign-in:', error);
            alert(error.message || 'An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const verifyOtp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (otp.length !== 6) {
            alert('Please enter a valid 6-digit OTP.');
            return;
        }

        try {
            setIsLoading(true);

            if (!verificationId) {
                throw new Error('Verification ID not found.');
            }

            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                otp
            );

            const userCredential = await auth.signInWithCredential(credential);
            console.log('User signed in:', userCredential);
            alert('Sign-in successful!');
        } catch (error: any) {
            console.error('Error verifying OTP:', error);
            alert(error.message || 'Failed to verify OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={isSms ? verifyOtp : sendCode}
            className="border mx-4 w-[500px] items-center rounded-lg h-[max-content] bg-white/70 py-10 px-6 sm:px-8 gap-5 flex flex-col"
        >
            <Link href="/" className="flex gap-4 items-center mb-5">
                <Image
                    src="/assets/images/logo/logo.png"
                    width={50}
                    height={50}
                    alt="Zhanshuak logo"
                    className="rounded-xl object-cover"
                />
                <h1 className="font-bold uppercase text-2xl">zhanshuak</h1>
            </Link>
            {!isSms ? (
                <PhoneInput setPhone={setNumber} />
            ) : (
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    shouldAutoFocus
                    renderSeparator={<span className="w-4" />}
                    renderInput={(props) => <input {...props} />}
                    inputStyle="p-2 border rounded-lg text-lg"
                />
            )}
            <div id="recaptcha-container" style={{ display: 'none' }} />
            <button
                type="submit"
                disabled={isLoading}
                className={`flex w-full justify-center bg-primary rounded-lg py-2 text-white font-semibold ${isLoading ? 'opacity-45' : ''}`}
            >
                {isSms ? 'Verify OTP' : 'Send SMS Code'}
            </button>
            <button type="button" onClick={() => setIsEmail(true)} className="text-center">
                Sign in with Email
            </button>
        </form>
    );
};

export default SignIn;
