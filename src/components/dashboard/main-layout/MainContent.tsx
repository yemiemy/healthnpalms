import React from "react";
import HeroCard from "./HeroCard";
import PatientListCard from "./PatientListCard";

type Props = {};

const MainContent = (props: Props) => {
    return (
        <div className="flex-1 w-full">
            <HeroCard />
            <PatientListCard />
        </div>
    );
};

export default MainContent;
