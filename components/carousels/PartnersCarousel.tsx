'use client';
import React, { useEffect, useRef } from 'react';

const logos: string[] = [
    'disney.svg',
    'airbnb.svg',
    'apple.svg',
    'samsung.svg',
    'quora.svg',
    'sass.svg',
    'spark.svg',
];

const Carousel: React.FC = () => {
    const listRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const ul = listRef.current;

        if (ul) {
            const clone = ul.cloneNode(true) as HTMLUListElement;
            clone.classList.add('clone');
            ul.parentNode?.appendChild(clone);

            const totalWidth = ul.scrollWidth;
            const duration = totalWidth / 100;

            ul.style.animationDuration = `${duration}s`;
            clone.style.animationDuration = `${duration}s`;
        }
    }, []);

    return (
        <div className="w-full mx-5 md:px-6">
            <div className="text-center">
                <div className="w-full inline-flex flex-nowrap overflow-hidden relative">
                    <ul
                        ref={listRef}
                        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    >
                        {logos.map((logo, index) => (
                            <li key={index}>
                                <img
                                    src={`/assets/images/logo/${logo}`}
                                    alt={`Logo ${index + 1}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
