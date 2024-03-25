import React from "react";
import SideBar from "../layouts/SideBar";
import Main from "./Main";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div className="flex">
            <SideBar />
            <Main />
        </div>
    );
};

export default Dashboard;
