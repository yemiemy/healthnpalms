import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import { User } from "@/lib/models/accounts/models";

type Props = {
    user?: User;
};

const DashboardMainLayout = ({ user }: Props) => {
    return (
        <div className="p-8 flex md:flex-row flex-col gap-8 w-full">
            <MainContent user={user} />
            <SideContent />
        </div>
    );
};

export default DashboardMainLayout;
