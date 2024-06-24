import React from "react";
import DashboardNavBar from "../../layouts/DashboardNavBar";
import { User } from "@/lib/models/accounts/models";
import MainLayout from "./main-layout/MainLayout";
import { MedicalProfessional } from "@/lib/models/staff/models";

type Props = {
    doctor?: MedicalProfessional;
    token: string;
};

const Main = ({ doctor, token }: Props) => {
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={doctor?.user} />
            <MainLayout token={token} />
        </div>
    );
};

export default Main;
