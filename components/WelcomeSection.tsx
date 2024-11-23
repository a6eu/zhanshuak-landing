import Link from 'next/link';
import Image from 'next/image';

const WelcomeSection = () => {
    return (
        <section className="h-[50vh] flex overflow-hidden flex-col justify-between w-full bg-white">
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
                <Image
                    src="/images/people/welcome-doctor.jpg"
                    alt="mr.Doctor"
                    width={250}
                    height={250}
                />
                <div className='flex flex-col gap-3 justify-center'>
                    <Link
                        className="bg-[#5b84d9] self-center font-bold rounded-full border-4 border-[#dee5f4] text-white px-6 py-3 hover:scale-105 hover:border-transparent transition-all ease-out"
                        href={'#'}
                    >
                        Download
                    </Link>
                    <p className='opacity-70'>over 10.000 reviews</p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
