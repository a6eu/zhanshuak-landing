import BurgerButton from "@/components/icons/BurgerButton";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "@/components/admin/userIcon";

const ToolBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <nav>
                <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Link href={"/dashboard"}>
                    <Image
                        src="/assets/images/logo/logo.png"
                        width={50}
                        height={50}
                        alt="Zhanshuak logo"
                        className="rounded-xl object-cover"
                    />
                    <h1 className="font-bold uppercase text-2xl">
                        Admin Panel
                    </h1>
                </Link>
            </nav>
            <UserIcon/>
        </header>
    )
}

export default ToolBar