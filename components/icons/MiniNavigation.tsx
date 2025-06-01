import Link from 'next/link';
import React from "react";

interface Props {
    isOpen: boolean;
}

const MiniNavigationMenu: React.FC<Props> = ({isOpen}) => {
    return (
        <nav
            className={`md:hidden flex flex-col z-50 shadow border items-start p-5 top-18 gap-3 bg-white rounded-l-xl rounded-b-xl absolute right-[15%] ${
                isOpen
                    ? 'translate-x-5 transition-all delay-150 duration-200'
                    : 'translate-x-[200%]'
            }`}
        >
            <Link className="hover:underline text-nowrap" href={'#about'}>
                About
            </Link>
            <Link className="hover:underline" href={'#partners'}>
                Partners
            </Link>
            <Link href={'/auth'}>Sign up</Link>
        </nav>
    );
};

export default MiniNavigationMenu;