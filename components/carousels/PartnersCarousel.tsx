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
            clone.setAttribute('aria-hidden', 'true');
            ul.parentNode?.appendChild(clone);
        }
    }, []);

    return (
        <div className="w-full mx-5 md:px-6">
            <div className="text-center">
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
