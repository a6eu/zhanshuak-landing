import Link from "next/link";

const SideToolBar = ({isOpen}: { isOpen: boolean}) => {
    return (
        <div
            className={`bg-black h-screen text-2xl transition-all duration-300 ease-in-out absolute left-0 top-[104px] p-3 z-10 overflow-hidden ${
                isOpen ? 'w-56' : 'w-24'
            }`}>
            <h3 className={`font-bold ${isOpen ? 'show-text' : 'hidden-text'}`}>Main Tools</h3>
            <hr/>
            <ul className="list-none pl-1.5 text-[0.8em] flex flex-col space-y-2 pt-4">
                <li className={`${isOpen && "hover:border-b-white"} border-b-transparent border-b-[1px]`}>
                    <Link href={"/dashboard"} className="flex items-center gap-5">
                        <svg
                            width="44px"
                            height="44px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className={`${isOpen ? 'show-text' : 'hidden-text'}`}>Календарь и отзывы</span>
                    </Link>
                </li>
                <li className={`${isOpen && "hover:border-b-white"} border-b-transparent border-b-[1px]`}>
                    <Link href={"/dashboard/users"} className="flex items-center gap-5">
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className={`${isOpen ? 'show-text' : 'hidden-text'}`}>Пользователи</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideToolBar;

