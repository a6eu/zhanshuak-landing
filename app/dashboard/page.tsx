'use client'

import DashboardHeader from "@/components/dashboard/DahsboardHeader"
import CalendarApp from "@/components/dashboard/CalendarX";
import Reviews from "@/components/dashboard/Reviews";

const DashboardPage = () => {
    return (
        <>
            <DashboardHeader/>
            <div className="flex flex-col p-4">
                <div className="flex pl-32 gap-3 flex-col">
                    <CalendarApp/>
                    <Reviews/>
                </div>
            </div>
        </>
    )
}

export default DashboardPage