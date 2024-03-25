import { ChevronRightCircleIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
    bgColor: string;
};

const Appointment2 = ({ bgColor }: Props) => {
    return (
        <div
            className={
                "flex gap-2 text-black items-center rounded-lg p-2 mb-2 " +
                bgColor
            }>
            <Image
                src="/avatar-1.jpg"
                alt="user-avatar"
                width={50}
                height={50}
                className="rounded-full"
            />
            <div>
                <h1 className="text-sm font-semibold">Dennis Iowa</h1>
                <p className="text-xs font-light">10:00 am - 11:00 am</p>
            </div>
            <div className="ms-auto">
                <ChevronRightIcon className="bg-white p-1 rounded-full text-slate-500" />
            </div>
        </div>
    );
};

export default Appointment2;
