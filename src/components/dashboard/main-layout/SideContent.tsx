import React from "react";
import ProfileCompletionCard from "./side-content/ProfileCompletionCard";
import UpcomingAppointmentsCard from "./side-content/UpcomingAppointmentsCard";

type Props = {};

const SideContent = (props: Props) => {
    return (
        <div className="hidden md:block self-start w-[30%] p-4 bg-slate-200 rounded-md h-full">
            <ProfileCompletionCard />
            <UpcomingAppointmentsCard />
        </div>
    );
};

export default SideContent;
