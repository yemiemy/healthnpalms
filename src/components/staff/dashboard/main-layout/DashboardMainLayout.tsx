import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import { MedicalProfessional } from "@/lib/models/staff/models";

type Props = {
    doctor?: MedicalProfessional;
};

const DashboardMainLayout = ({ doctor }: Props) => {
    return (
        <div className="p-8 flex md:flex-row flex-col gap-8 w-full">
            <MainContent doctor={doctor} />
            <SideContent />
        </div>
    );
};

export default DashboardMainLayout;
