import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import { User } from "@/lib/models/accounts/models";
import React from "react";
import MainContent from "./main-layout/MainContent";
import SideContent from "./main-layout/SideContent";

type Props = {
    user?: User;
};

const Main = ({ user }: Props) => {
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={user} />
            <div className="p-8 md:p-32 flex md:flex-row flex-col gap-8 w-full">
                <MainContent user={user} />
                <SideContent user={user} />
            </div>
        </div>
    );
};

export default Main;
