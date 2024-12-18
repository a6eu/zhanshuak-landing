'use client';
import Image from 'next/image';
import Link from 'next/link';
import BurgerButton from '@/components/icons/BurgerButton';
import {useEffect, useState} from 'react';
import MiniNavigationMenu from '../icons/MiniNavigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 650) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`z-40 fixed w-full top-0 transition-all duration-300 ${isScrolled ? 'bg-white border-b' : 'px-2 lg:px-20 py-5'}`}
        >
            <div
                className={`flex w-full justify-between gap-5 items-center px-5 sm:px-10 ${!isScrolled ? 'rounded-full bg-black/20 backdrop-blur-sm border h-[10vh]' : 'h-[7vh]'}`}
            >
                <Link href={'/'} className="flex gap-4 items-center">
                    <Image
                        src="/assets/images/logo/logo.png"
                        width={50}
                        height={50}
                        alt="Zhanshuak logo"
                        className="rounded-xl object-cover"
                    />
                    <h1 className="font-bold uppercase text-2xl">
                        zhanshuak
                    </h1>
                </Link>
                <nav className="md:flex text-xl items-center justify-between gap-8 hidden">
                    <Link
                        className="hover:underline text-nowrap scroll-smooth"
                        href={'#about'}
                    >
                        About us
                    </Link>
                    <Link className="hover:underline" href={'#partners'}>
                        Partners
                    </Link>
                    <Link className="hover:underline" href={'#download'}>
                        Download
                    </Link>
                </nav>
                <nav className="hidden md:flex md:flex-col lg:flex-row lg:gap-4 text-xl items-center">
                    <Link
                        className="hover:underline"
                        href={'/auth'}
                    >
                        Sign in
                    </Link>
                    <Link
                        className="bg-[#4671c6] font-bold rounded-full text-white px-3 py-1 hover:scale-105 transition-all"
                        href={'/auth'}
                    >
                        Sign up
                    </Link>
                </nav>
                <BurgerButton
                    isWhite={false}
                    show={false}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
            <MiniNavigationMenu
                isOpen={isOpen}
            />
        </header>);
};

export default Header;
