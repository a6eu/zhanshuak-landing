"use client"
import Slider from "react-infinite-logo-slider";
import Image1 from "@/public/assets/images/logo/apple.svg";
import Image2 from "@/public/assets/images/logo/airbnb.svg";
import Image3 from "@/public/assets/images/logo/disney.svg";
import Image5 from "@/public/assets/images/logo/facebook.svg";
import Image6 from "@/public/assets/images/logo/samsung.svg";
import Image7 from "@/public/assets/images/logo/sass.svg";
import Image8 from "@/public/assets/images/logo/spark.svg";
import Image from "next/image"

const images = [Image1, Image2, Image3, Image5, Image6, Image7, Image8];

const PartnersSection = () => {
    return (
        <section id="partners" className="overflow-x-hidden w-[100vw] flex flex-col items-center my-8">
            <h1 className="text-center font-bold text-3xl mb-12">Partners</h1>
            <div className="flex overflow-hidden carousel">
                {[...images, ...images, ...images, ...images].map((image, index) => (
                    <Slider.Slide key={index}>
                        <Image src={image} alt="" className="w-36"/>
                    </Slider.Slide>
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;
