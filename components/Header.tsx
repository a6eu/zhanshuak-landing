'use client';
import Image from 'next/image';
import Link from 'next/link';
import BurgerButton from '@/components/ui/BurgerButton';
import SideBarNavigationMenu from './ui/SideBarNavigationMenu';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="overflow-hidden flex h-[10vh] gap-5 items-center justify-between px-2 sm:px-10">
            <div className="flex gap-4 items-center">
                <Image
                    src="/images/logo/logo.png"
                    width={50}
                    height={50}
                    alt="Zhanshuak logo"
                    className="rounded-xl"
                    objectFit="cover"
                />
                <h1 className="font-bold uppercase text-2xl">zhansuak</h1>
            </div>
            <nav className="md:flex text-xl items-center justify-between gap-8 w-1/6 hidden">
                <Link className="hover:underline" href={'#'}>
                    About
                </Link>
                <Link className="hover:underline" href={'#'}>
                    Partners
                </Link>
            </nav>
            <nav className="hidden md:flex text-xl gap-8 items-center">
                <Link className="hover:underline" href={'#'}>
                    Sign in
                </Link>
                <Link
                    className="bg-[#4671c6] font-bold rounded-full text-white px-6 py-3 hover:scale-105 transition-all"
                    href={'#'}
                >
                    Sign up
                </Link>
            </nav>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <SideBarNavigationMenu isOpen={isOpen} />
        </header>
    );
};

export default Header;
