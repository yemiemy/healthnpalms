import { User } from "@/lib/models/accounts/models";
import { MedicalProfessional } from "@/lib/models/staff/models";
import Image from "next/image";
import React from "react";

type Props = {
    doctor?: MedicalProfessional;
};

const HeroCard = ({ doctor }: Props) => {
    return (
        <div className="flex justify-between bg-purple-600 text-white dark:bg-slate-800 dark:text-white rounded-lg hero-height">
            <div className="w-full px-8 py-10 md:w-[50%]">
                <div className="">
                    <h4 className="text-sm lg:text-base">Welcome back,</h4>
                    <h1 className="text-xl lg:text-3xl font-bold my-2">
                        {doctor?.user.first_name + " " + doctor?.user.last_name}
                    </h1>
                    <h4 className="text-sm lg:text-base">
                        {doctor?.education_and_qualifications}
                    </h4>
                </div>
                <div className="mt-8 text-base xl:text-xl">
                    You have a total of{" "}
                    <span className="text-yellow-400">12 appointments</span>{" "}
                    today!
                </div>
            </div>
            <Image
                src="/female-doctor-with-stethoscope-bg.png"
                alt="doctor-placeholder"
                width={368}
                height={312}
                priority={true}
                className="hidden md:block h-[105%] -m-[13px]"
            />
        </div>
    );
};

export default HeroCard;
