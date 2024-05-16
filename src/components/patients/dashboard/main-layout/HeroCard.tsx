import { User } from "@/lib/models/accounts/models";
import Image from "next/image";
import React from "react";

type Props = {
    user?: User;
};

const HeroCard = ({ user }: Props) => {
    return (
        <div className="flex bg-purple-600 text-white dark:bg-slate-800 dark:text-white rounded-lg hero-height">
            <div className="w-full px-8 py-10">
                <div className="">
                    <h4 className="text-sm lg:text-base">Welcome back,</h4>
                    <h1 className="text-xl lg:text-3xl font-bold my-2">
                        {user?.first_name + " " + user?.last_name}
                    </h1>
                </div>
                <div className="mt-8 text-base xl:text-xl">
                    You have a total of{" "}
                    <span className="text-yellow-400">
                        12 upcoming appointments!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
