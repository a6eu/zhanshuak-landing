import Rating from '@/components/icons/Rating';
import Link from 'next/link';

const WelcomeSection = () => {
    return (
        <section className="sm:h-[90vh] h-[70vh] z-10 px-4 pt-24 flex overflow-hidden flex-col justify-between w-full bg-white">
            <div className="pt-10 flex flex-col items-center gap-5">
                <h3
                    style={{ width: 'min(90vw, 700px)' }}
                    className="text-3xl text-center font-bold"
                >
                    Accelerating healthcare payments
                </h3>
                <p
                    style={{ width: 'min(90vw, 700px)' }}
                    className="text-center opacity-40"
                >
                    Arrow enables fast and accurate healthcare payments for both
                    healthcare providers and health plans
                </p>
            </div>
            <div className="flex w-full justify-around flex-row-reverse self-center">
                <img
                    src="/assets/images/people/welcome-doctor.jpg"
                    alt="mr.Doctor"
                    className="size-60 sm:size-80 md:size-96 lg:size-[500px]"
                />
                <div className="flex flex-col items-center gap-3 justify-center">
                    <Link
                        className="bg-[#5b84d9] md:text-3xl self-center font-bold rounded-full border-4 border-[#dee5f4] text-white px-6 py-3 hover:scale-105 hover:border-transparent transition-all ease-out"
                        href={'#'}
                    >
                        Download
                    </Link>
                    <Rating />
                    <p className="opacity-70 text-center">
                        over 10.000 reviews
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
