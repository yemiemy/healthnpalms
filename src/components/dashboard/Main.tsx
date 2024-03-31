import React from "react";
import DashboardNavBar from "../layouts/DashboardNavBar";
import DashboardMainLayout from "./main-layout/DashboardMainLayout";
import { User } from "@/lib/models/accounts/models";

type Props = {
    user: User | undefined;
};

const Main = ({ user }: Props) => {
    return (
        <div className="flex-1 w-full max-h-screen h-screen text-black dark:text-slate-300">
            <DashboardNavBar user={user} />
            <DashboardMainLayout />
        </div>
    );
};

export default Main;
