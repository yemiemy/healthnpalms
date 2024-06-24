import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import { Patient } from "@/lib/models/patient/models";

type Props = {
    patient: Patient;
};

const MainLayout = ({ patient }: Props) => {
    return (
        <div className="flex flex-col md:flex-row">
            <MainContent patient={patient} />
            <SideContent intialPatient={patient} />
        </div>
    );
};

export default MainLayout;
