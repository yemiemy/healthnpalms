import React from "react";
import ProfileCompletionCard from "./side-content/ProfileCompletionCard";
import UpcomingAppointmentsCard from "../../../layouts/UpcomingAppointmentsCard";
import CalendarCard from "./side-content/CalendarCard";

type Props = {};

const SideContent = (props: Props) => {
    return (
        <div className="md:block self-start w-full md:w-[30%] rounded-md h-full">
            <CalendarCard />
            <UpcomingAppointmentsCard />
        </div>
    );
};

export default SideContent;
