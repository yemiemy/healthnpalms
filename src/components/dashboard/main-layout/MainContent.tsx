import React from "react";
import HeroCard from "./HeroCard";
// import PatientListCard from "./PatientListCard";
import ReportCard from "./ReportCard";
import InfoChart from "./InfoChart";

type Props = {};

const MainContent = (props: Props) => {
    return (
        <div className="flex-1 flex flex-col gap-8 w-full">
            <HeroCard />
            <ReportCard />
            <InfoChart />
            {/* <PatientListCard /> */}
        </div>
    );
};

export default MainContent;
