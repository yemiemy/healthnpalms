import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

type Props = {};

const DashboardMainLayout = (props: Props) => {
    return (
        <div className="p-4 flex gap-4 w-full max-h-[95%] overflow-auto">
            <MainContent />
            <SideContent />
        </div>
    );
};

export default DashboardMainLayout;
