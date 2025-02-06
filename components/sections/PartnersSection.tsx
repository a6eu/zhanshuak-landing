"use client"
import Slider from "react-infinite-logo-slider";
import Image1 from "@/public/assets/images/logo/apple.svg";
import Image2 from "@/public/assets/images/logo/airbnb.svg";
import Image3 from "@/public/assets/images/logo/disney.svg";
import Image4 from "@/public/assets/images/logo/quora.svg";
import Image5 from "@/public/assets/images/logo/facebook.svg";
import Image6 from "@/public/assets/images/logo/samsung.svg";
import Image7 from "@/public/assets/images/logo/sass.svg";
import Image8 from "@/public/assets/images/logo/spark.svg";
import Image from "next/image"

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const PartnersSection = () => {
    return (
        <section id="partners" className="flex flex-col items-center">
            <h1 className="text-center font-bold text-3xl mb-12">Partners</h1>
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}
            >
                {images.map((image, index) => (
                    <Slider.Slide key={index}>
                        <Image src={image} alt="" className="w-36"/>
                    </Slider.Slide>
                ))}
            </Slider>
        </section>
    );
};

export default PartnersSection;
