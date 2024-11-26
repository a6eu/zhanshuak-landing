import Header from '@/components/layout/Header';
import AboutUs from '@/components/sections/AboutUs';
import PartnersSection from '@/components/sections/PartnersSection';
import WelcomeSection from '@/components/sections/WelcomeSection';

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <Header />
            <WelcomeSection />
            <AboutUs />
            <PartnersSection />
        </div>
    );
}
