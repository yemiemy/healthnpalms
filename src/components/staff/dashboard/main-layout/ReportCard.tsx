import {
    BriefcaseIcon,
    StethoscopeIcon,
    SyringeIcon,
    Users2Icon,
} from "lucide-react";
import React from "react";

type Props = {};

const ReportCard = (props: Props) => {
    return (
        <div className="p-4 border rounded-lg">
            <div className="mb-4">
                <h1 className="text-xl font-semibold text-black">Report</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-green-300 p-4 xl:p-8 h-full rounded-lg">
                    <div className="flex gap-2 text-xs xl:text-sm 3xl:text-base items-center">
                        <Users2Icon className="w-4 h-4 xl:w-6 xl:h-6" />{" "}
                        <span>Total Patients</span>
                    </div>
                    <div className="text-8xl md:text-8xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold mt-4">
                        473
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-4 xl:p-8 h-full rounded-lg">
                    <div className="flex gap-2 text-xs xl:text-sm 3xl:text-base items-center">
                        <StethoscopeIcon className="w-4 h-4 xl:w-6 xl:h-6" />{" "}
                        <span>Consultation</span>
                    </div>
                    <div className="text-8xl md:text-8xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold mt-4">
                        236
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4 xl:p-8 h-full rounded-lg">
                    <div className="flex gap-2 text-xs xl:text-sm 3xl:text-base items-center">
                        <SyringeIcon className="w-4 h-4 xl:w-6 xl:h-6" />{" "}
                        <span>Injuct</span>
                    </div>
                    <div className="text-8xl md:text-8xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold mt-4">
                        105
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 p-4 xl:p-8 h-full rounded-lg">
                    <div className="flex gap-2 text-xs xl:text-sm 3xl:text-base items-center">
                        <BriefcaseIcon className="w-4 h-4 xl:w-6 xl:h-6" />{" "}
                        <span>Surgery</span>
                    </div>
                    <div className="text-8xl md:text-8xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold mt-4">
                        132
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportCard;
