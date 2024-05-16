import { User } from "@/lib/models/accounts/models";
import React from "react";
import HeroCard from "./HeroCard";
import VisitHistoryTable from "./VisitHistoryTable";

type Props = {
    user?: User;
};

const MainContent = ({ user }: Props) => {
    return (
        <div className="flex-1 flex flex-col gap-8 w-full">
            <HeroCard user={user} />
            {/* <ReportCard />
            <InfoChart />*/}
            <VisitHistoryTable />
        </div>
    );
};

export default MainContent;
