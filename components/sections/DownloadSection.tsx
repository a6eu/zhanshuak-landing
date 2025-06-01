import React from "react";
import Image from "next/image";

const DownloadSection: React.FC = () => {
    return (
        <section className="w-full flex items-center justify-center py-16 px-[5%] bg-[#5b84d9] text-white">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5">
                <div className="flex-1 flex flex-col justify-center px-8">
                    <h2 className="text-4xl font-bold">Download Our App</h2>
                    <p className="text-lg mt-4 max-w-lg">
                        Stay connected and manage your apartment seamlessly. Track service requests, receive important updates, and make secure payments – all in one place.
                    </p>
                    <ul className="mt-4 list-disc list-inside">
                        <li>📌 Submit and track requests easily</li>
                        <li>📢 Get real-time notifications</li>
                        <li>💳 Secure online payments</li>
                        <li>🤝 Connect with your community</li>
                    </ul>
                    <div className="mt-6 flex space-x-4">
                        <a href="#" className="bg-white text-[#5b84d9] px-5 py-3 rounded-lg flex items-center shadow-md hover:bg-gray-200">
                            <i className="fab fa-apple mr-2"></i> Download on the App Store
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image width={700} height={400} src="/assets/images/mockup.png" alt="App Mockup" className="rounded-lg"/>
                </div>
            </div>
        </section>
    )
}

export default DownloadSection;
