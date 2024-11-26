'use client';
import Link from 'next/link';
import Arrow from '../icons/Arrow';
import Image from 'next/image';
import {FormEvent, useState} from 'react';
import OtpInput from 'react-otp-input';
import {auth} from '@/firebase/setup';
import firebase from 'firebase/compat/app';
import {redirect} from 'next/navigation';
import PhoneInput from "@/components/inputs/PhoneInput";

const SignIn = () => {
    const [number, setNumber] = useState('');
    const [isSms, setIsSms] = useState(false);
    const [otp, setOtp] = useState<string>('');
    const [verificationId, setVerificationId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendCode = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (number === '' || number.length < 10) {
            alert('Please enter a valid phone number.');
            return;
        }

        try {
            setIsLoading(true);
            const formattedNumber = number; /*`+${number.replace(/\D/g, "")}`;*/
            console.log(formattedNumber)

            const verify = new firebase.auth.RecaptchaVerifier(
                'recaptcha-container',
                {
                    size: 'invisible',
                    callback: () => console.log('Recaptcha Verified'),
                }
            );

            const confirmationResult = await auth.signInWithPhoneNumber(
                formattedNumber,
                verify
            );

            setIsSms(true);
            setVerificationId(confirmationResult.verificationId);
        } catch (error) {
            console.error('Error during sign-in:', error);
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
                throw new Error('No verification ID found.');
            }

            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                otp
            );

            const userCredential = await auth.signInWithCredential(credential);
            console.log(userCredential);
            redirect('/dashboard');
        } catch (error) {
            console.error('Error verifying OTP:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            className="border mx-4 w-[500px] items-center rounded-lg h-[max-content] bg-white/70 py-10 px-6 sm:px-8 gap-5 flex flex-col"
            onSubmit={isSms ? verifyOtp : sendCode}
        >
            <Link href={'/'} className="flex gap-4 items-center mb-5">
                <Image
                    src="/images/logo/logo.png"
                    width={50}
                    height={50}
                    alt="Zhanshuak logo"
                    className="rounded-xl object-cover"
                />
                <h1 className="font-bold uppercase text-2xl">zhanshuak</h1>
            </Link>
            {!isSms ? (
                <>
                    <PhoneInput setPhone={setNumber}/>
                </>
            ) : (
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    shouldAutoFocus={true}
                    renderSeparator={<span className="w-4"></span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                        border: '1px solid #94a3b8',
                        borderRadius: '8px',
                        width: '15%',
                        height: '54px',
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: '400',
                        caretColor: 'blue',
                    }}
                />
            )}
            <div id="recaptcha-container"/>
            <button
                disabled={isLoading}
                type="submit"
                className={`flex w-full justify-center bg-primary rounded-lg py-2 text-white font-semibold ${isLoading && 'opacity-45'}`}
            >
                <span className="flex items-center">
                    {isSms ? 'Verify' : 'Send code via SMS'} <Arrow/>
                </span>
            </button>
        </form>
    );
};

export default SignIn;
