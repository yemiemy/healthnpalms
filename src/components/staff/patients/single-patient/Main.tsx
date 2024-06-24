"use client";
import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import React from "react";
import MainLayout from "./MainLayout";
import { Patient } from "@/lib/models/patient/models";
import { MedicalProfessional } from "@/lib/models/staff/models";

type Props = {
    patient: Patient;
    doctor: MedicalProfessional;
};

const Main = ({ patient, doctor }: Props) => {
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={doctor.user} />
            <MainLayout patient={patient} />
        </div>
    );
};
export default Main;
