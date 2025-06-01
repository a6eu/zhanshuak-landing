const AboutUs = () => {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto my-12 px-6">
            <h1 className="text-center font-bold text-4xl mb-12 text-gray-900">
                About Us
            </h1>

            {/* About Section 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#5b84d9] text-white rounded-2xl p-6 items-center">
                <video
                    className="w-full rounded-lg"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/videos/about-1.mp4" />
                </video>
                <article className="flex flex-col gap-4 text-left sm:text-right">
                    <h2 className="font-bold text-2xl sm:text-3xl">
                        Our Mission
                    </h2>
                    <p className="text-lg">
                        We aim to revolutionize the IT industry by delivering
                        innovative and scalable digital solutions. Our team is
                        dedicated to turning your ideas into high-quality
                        products that drive success.
                    </p>
                </article>
            </div>

            {/* About Section 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#5b84d9] text-white rounded-2xl p-6 items-center mt-8">
                <article className="flex flex-col gap-4 text-left">
                    <h2 className="font-bold text-2xl sm:text-3xl">
                        Our Expertise
                    </h2>
                    <p className="text-lg">
                        With a strong foundation in software development, we
                        specialize in web and mobile applications, blockchain
                        technology, and AI-driven solutions to help businesses
                        scale efficiently.
                    </p>
                </article>
                <video
                    className="w-full rounded-lg"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/videos/about-2.mp4" />
                </video>
            </div>

            {/* About Section 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#5b84d9] text-white rounded-2xl p-6 items-center mt-8">
                <video
                    className="w-full rounded-lg"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/videos/about-3.mp4" />
                </video>
                <article className="flex flex-col gap-4 text-left sm:text-right">
                    <h2 className="font-bold text-2xl sm:text-3xl">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg">
                        Our customer-centric approach ensures that every project
                        is tailored to meet unique business needs. From idea to
                        execution, we provide end-to-end development with
                        cutting-edge technology.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default AboutUs;
