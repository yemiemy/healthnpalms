import UpcomingAppointmentsCard from "@/components/layouts/UpcomingAppointmentsCard";
import React from "react";

type Props = {};

const SideContent = (props: Props) => {
    return (
        <div className="md:block self-start w-full md:w-[30%] rounded-md h-full">
            {/* <CalendarCard /> */}
            <div className="w-full">
                <h1 className="mb-2">Your upcoming appointments</h1>
                <UpcomingAppointmentsCard />
            </div>
        </div>
    );
};

export default SideContent;
