import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/staff/patients/Main";
import React from "react";

type Props = {};

const Page = (props: Props) => {
    return (
        <div className="flex">
            <SideBar isPatientsActive />
            <Main user={undefined} />
        </div>
    );
};

export default Page;
