"use client"

import React from "react";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    show: boolean;
    isWhite: boolean;
}

const BurgerButton: React.FC<Props> = ({ isOpen, setIsOpen, show, isWhite }) => {
    return (
        <button
            className={`relative w-10 h-6 flex ${!show && 'md:hidden'} z-[100] flex-col justify-between items-center group`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span
                className={`w-8 h-1 ${isWhite ? 'bg-white' : 'bg-black'} rounded-full transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
            ></span>
            <span
                className={`w-8 h-1 ${isWhite ? 'bg-white' : 'bg-black'} rounded-full transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`w-8 h-1 ${isWhite ? 'bg-white' : 'bg-black'} rounded-full transition-transform duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
            ></span>
        </button>
    );
};

export default BurgerButton;