import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

type Props = {};

const MainLayout = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row">
            <MainContent />
            <SideContent />
        </div>
    );
};

export default MainLayout;
