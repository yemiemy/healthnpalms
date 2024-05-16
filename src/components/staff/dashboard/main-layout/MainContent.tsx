import React from "react";
import HeroCard from "./HeroCard";
// import PatientListCard from "./PatientListCard";
import ReportCard from "./ReportCard";
import InfoChart from "./InfoChart";
import { User } from "@/lib/models/accounts/models";

type Props = {
    user?: User;
};

const MainContent = ({ user }: Props) => {
    return (
        <div className="flex-1 flex flex-col gap-8 w-full">
            <HeroCard user={user} />
            <ReportCard />
            <InfoChart />
            {/* <PatientListCard /> */}
        </div>
    );
};

export default MainContent;
