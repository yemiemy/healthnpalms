"use client";
import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import { User } from "@/lib/models/accounts/models";
import React from "react";
import MainContent from "./main-layout/MainContent";
import SideContent from "./main-layout/SideContent";

type Props = {
    initialUser?: User;
    token?: string;
};

const Main = ({ initialUser, token }: Props) => {
    const [user, setUser] = React.useState<User | undefined>(initialUser);
    return (
        <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
            <DashboardNavBar user={user} />
            <div className="p-8 md:p-32 flex md:flex-row flex-col gap-8 w-full">
                {user && (
                    <MainContent user={user} setUser={setUser} token={token} />
                )}
                {user && <SideContent user={user} token={token} />}
                {!user && <div>Please login</div>}
            </div>
        </div>
    );
};

export default Main;
