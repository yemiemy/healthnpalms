import React from "react";
import HeroCard from "./HeroCard";
import ReportCard from "./ReportCard";
import InfoChart from "./InfoChart";
import { MedicalProfessional } from "@/lib/models/staff/models";

type Props = {
    doctor?: MedicalProfessional;
};

const MainContent = ({ doctor }: Props) => {
    return (
        <div className="flex-1 flex flex-col gap-8 w-full">
            <HeroCard doctor={doctor} />
            <ReportCard />
            <InfoChart />
        </div>
    );
};

export default MainContent;
