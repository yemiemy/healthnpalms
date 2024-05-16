import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import { User } from "@/lib/models/accounts/models";
import React from "react";
import MainLayout from "./main-layout/MainLayout";

type Props = {
    user?: User;
};

const Main = ({ user }: Props) => {
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={user} />
            <MainLayout user={user} />
        </div>
    );
};

export default Main;
