import Image from "next/image";
import React from "react";

type Props = {};

const HeroCard = (props: Props) => {
    return (
        <div className="p-4 bg-purple-400 dark:bg-slate-800 dark:text-white rounded-md">
            <div>
                <div>
                    <h4>Welcome back,</h4>
                    <h1>Dr. Jessica Linda</h1>
                    <h4>MD, DM (Cardiology), FACC, FESC</h4>
                </div>
                <div>
                    You have a total of{" "}
                    <span className="text-yellow-400">12 appointments</span>{" "}
                    today!
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
