import Link from 'next/link';

interface Props {
    isOpen: boolean;
}

const SideBarNavigationMenu = ({ isOpen }: Props) => {
    return (
        <>
            <nav
                className={`flex flex-col z-50 shadow border items-start p-5 top-20 gap-3 bg-white rounded-l-xl rounded-b-xl absolute right-[5%] ${
                    isOpen
                        ? 'opacity-100 transition-all delay-150 duration-500'
                        : 'opacity-0'
                }`}
            >
                <Link className="hover:underline" href={'#'}>
                    About
                </Link>
                <Link className="hover:underline" href={'#'}>
                    Partners
                </Link>
                <Link className="hover:underline" href={'#'}>
                    Sign in
                </Link>
                <Link href={'#'}>Sign up</Link>
            </nav>
        </>
    );
};

export default SideBarNavigationMenu;
