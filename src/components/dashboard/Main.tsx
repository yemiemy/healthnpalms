import React from "react";
import DashboardNavBar from "../layouts/DashboardNavBar";
import DashboardMainLayout from "./main-layout/DashboardMainLayout";

type Props = {};

const Main = (props: Props) => {
    return (
        <div className="flex-1 w-full max-h-screen h-screen text-black dark:text-slate-300">
            <DashboardNavBar />
            <DashboardMainLayout />
        </div>
    );
};

export default Main;
