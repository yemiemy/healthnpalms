"use client";
import { User } from "@/lib/models/accounts/models";
import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

type Props = {
    user?: User;
};

const MainLayout = ({ user }: Props) => {
    return (
        <div className="p-8 flex md:flex-row flex-col gap-8 w-full">
            <MainContent user={user} />
            <SideContent />
        </div>
    );
};

export default MainLayout;
