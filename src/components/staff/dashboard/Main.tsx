import React from "react";
import DashboardNavBar from "../../layouts/DashboardNavBar";
import DashboardMainLayout from "./main-layout/DashboardMainLayout";
import { MedicalProfessional } from "@/lib/models/staff/models";

type Props = {
    doctor?: MedicalProfessional;
};

const Main = ({ doctor }: Props) => {
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={doctor?.user} />
            <DashboardMainLayout doctor={doctor} />
        </div>
    );
};

export default Main;
