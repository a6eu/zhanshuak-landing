import PartnersCarousel from "../carousels/PartnersCarousel";

const PartnersSection = () => {
    return (
        <section id="partners" className="flex flex-col items-center">
            <h1 className="text-center font-bold text-3xl mb-12">Partners</h1>
            <PartnersCarousel />
        </section>
    );
};

export default PartnersSection;
