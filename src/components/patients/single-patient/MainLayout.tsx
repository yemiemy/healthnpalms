import React from "react";
import MainContent from "./MainContent";

type Props = {};

const MainLayout = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row">
            <MainContent />
            <div>Side Content</div>
        </div>
    );
};

export default MainLayout;
