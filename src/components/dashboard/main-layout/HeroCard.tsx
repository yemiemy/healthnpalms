import Image from "next/image";
import React from "react";

type Props = {};

const HeroCard = (props: Props) => {
    return (
        <div className="flex px-8 py-10 bg-purple-600 text-white dark:bg-slate-800 dark:text-white rounded-lg relative hero-height">
            <div className="w-full md:w-[50%]">
                <div className="">
                    <h4 className="text-sm lg:text-base">Welcome back,</h4>
                    <h1 className="text-xl lg:text-3xl font-bold my-2">
                        Dr. Bimbo Oshin
                    </h1>
                    <h4 className="text-sm lg:text-base">
                        MD, DM (Cardiology), FACC, FESC
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
                className="hidden md:block absolute top-[-20px] left-[40%] lg:left-[50%] w-[368px] h-[284px]"
            />
        </div>
    );
};

export default HeroCard;
