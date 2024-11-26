const AboutUs = () => {
    return (
        <section id="about" className="flex flex-col p-3 px-[5%]">
            <h1 className="text-center font-bold text-3xl mb-12">About us</h1>
            <div className="w-full gap-4 text-white rounded-2xl mb-4 self-center bg-[#5b84d9] flex flex-wrap items-center p-5 justify-between">
                <video
                    className="w-full sm:w-[30vw] rounded-lg"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/videos/about-1.mp4" />
                </video>
                <article className="flex flex-col gap-5 w-full sm:w-1/2">
                    <h1 className="font-bold sm:text-end text-2xl sm:text-3xl">
                        About us #1
                    </h1>
                    <main className="text-md sm:text-end">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, dolorem? Quis illum pariatur sapiente asperiores
                        delectus vel eum non, cum, sequi quos soluta dolores
                        iste, eos dignissimos adipisci minus accusantium.
                    </main>
                </article>
            </div>
            <div className="w-full gap-4 text-white rounded-2xl mb-4 self-center bg-[#5b84d9] flex flex-col sm:flex-row-reverse justify-between items-center p-5">
                <video
                    className="w-full sm:w-[30vw] rounded-lg"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/videos/about-2.mp4" />
                </video>
                <article className="flex flex-col gap-5 w-full sm:w-1/2">
                    <h1 className="font-bold text-start text-2xl sm:text-3xl">
                        About us #2
                    </h1>
                    <main className="text-md text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, dolorem? Quis illum pariatur sapiente asperiores
                        delectus vel eum non, cum, sequi quos soluta dolores
                        iste, eos dignissimos adipisci minus accusantium.
                    </main>
                </article>
            </div>
            <div className="w-full gap-4 text-white rounded-2xl mb-4 self-center bg-[#5b84d9] flex flex-wrap items-center p-5 justify-between">
                <video
                    className="w-full sm:w-[30vw] rounded-lg"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/videos/about-3.mp4" />
                </video>
                <article className="flex flex-col gap-5 w-full sm:w-1/2">
                    <h1 className="font-bold sm:text-end text-2xl sm:text-3xl">
                        About us #3
                    </h1>
                    <main className="text-md sm:text-end">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, dolorem? Quis illum pariatur sapiente asperiores
                        delectus vel eum non, cum, sequi quos soluta dolores
                        iste, eos dignissimos adipisci minus accusantium.
                    </main>
                </article>
            </div>
        </section>
    );
};

export default AboutUs;
