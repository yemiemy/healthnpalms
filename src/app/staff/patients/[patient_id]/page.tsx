import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/patients/single-patient/Main";
import React from "react";

type Props = {
    params: {
        patient_id: string;
    };
};

const Page = ({ params }: Props) => {
    return (
        <div className="flex">
            <SideBar isPatientsActive />
            <Main user={undefined} />
        </div>
    );
};

export default Page;
