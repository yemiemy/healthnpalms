import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

type Props = {};

const DashboardMainLayout = (props: Props) => {
    return (
        <div className="p-8 flex md:flex-row flex-col gap-8 w-full max-h-[95%] overflow-auto">
            <MainContent />
            <SideContent />
        </div>
    );
};

export default DashboardMainLayout;
