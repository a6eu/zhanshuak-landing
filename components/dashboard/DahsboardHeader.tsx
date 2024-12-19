'use client';
import Image from "next/image";
import Link from "next/link";
import BurgerButton from "@/components/icons/BurgerButton";
import React, { useState } from "react";
import UserIcon from "@/components/admin/userIcon";
import { useAuth } from "@/context/AuthContext";
import UserMenu from "@/components/dashboard/UserMenu";
import SideToolBar from "@/components/dashboard/SideToolBar";



function DashboardHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-[1000] flex py-3 bg-dashboardDark justify-between items-center px-5 text-white">
            <div className="flex gap-4 items-center">
                <BurgerButton isWhite={true} show={true} isOpen={isOpen} setIsOpen={setIsOpen} />
                <SideToolBar isOpen={isOpen} />
                <Link href={'/dashboard'} className={` flex gap-4 items-center`}>
                    <Image
                        src="/assets/images/logo/logo.png"
                        width={50}
                        height={50}
                        alt="Zhanshuak logo"
                        className="rounded-xl object-cover"
                    />
                    <h1 className="hidden sm:block font-bold uppercase text-2xl">
                        zhanshuak
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-5 font-medium underline">
                {loading ? (
                    "Loading..."
                ) : user ? (
                    <div className="text-end">
                        <p>{user.email}</p>
                        <p className="text-sm text-white">Role: {user.role}</p>
                    </div>
                ) : (
                    <p>Not signed in</p>
                )}
                <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
                    <UserIcon />
                </button>
                {userMenuOpen && (<UserMenu />)}
            </div>
        </header>
    );
}

export default DashboardHeader;
