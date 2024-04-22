import React from "react";
import { User } from "@/lib/models/accounts/models";
import DashboardNavBar from "../layouts/DashboardNavBar";
import MainLayout from "./MainLayout";

type Props = {
    user?: User;
};

const Main = ({ user }: Props) => {
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={user} />
            <MainLayout />
        </div>
    );
};

export default Main;
