import Header from '@/components/layout/Header';
import AboutUs from '@/components/sections/AboutUs';
import PartnersSection from '@/components/sections/PartnersSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import DownloadSection from "@/components/sections/DownloadSection";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Image from "next/image";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Header />
            <WelcomeSection />
            <AboutUs />
            <PartnersSection />
            <Pricing />
            <DownloadSection />
            <footer className="w-full bg-[#5b84d9] text-white py-10">
                <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5b84d9] font-bold">
                            <Image src="/assets/images/logo/logo.png" className="rounded-lg" alt="logo" width={50} height={50} />
                        </div>
                        <span className="text-xl font-semibold">Zhanshuak</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-6 md:mt-0">
                        <ul className="flex space-x-6 text-sm">
                            <li><a href="/#about" className="hover:underline">About</a></li>
                            <li><a href="/#services" className="hover:underline">Services</a></li>
                            <li><a href="/#projects" className="hover:underline">Portfolio</a></li>
                            <li><a href="/#contacts" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:opacity-80"><Facebook size={24} /></a>
                        <a href="#" className="hover:opacity-80"><Instagram size={24} /></a>
                        <a href="#" className="hover:opacity-80"><Twitter size={24} /></a>
                        <a href="#" className="hover:opacity-80"><Linkedin size={24} /></a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
                    © {new Date().getFullYear()} Company Name. All Rights Reserved.
                </div>
            </footer>

        </div>
    );
}
