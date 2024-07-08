import { ChevronRightCircleIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    bgColor: string;
    avatar: string;
    name: string;
    timeSlot: string;
    url?: string;
};

const Appointment2 = ({ bgColor, avatar, name, timeSlot, url }: Props) => {
    return (
        <div
            className={
                "flex gap-2 text-black items-center rounded-lg p-2 mb-2 " +
                bgColor
            }>
            <Image
                src={avatar}
                alt="user-avatar"
                width={50}
                height={50}
                className="rounded-full w-[50px] h-[50px]"
            />
            <div>
                <h1 className="text-sm font-semibold">{name}</h1>
                <p className="text-xs font-light">{timeSlot}</p>
            </div>
            {url && (
                <Link href={url} className="ms-auto">
                    <ChevronRightIcon className="bg-white p-1 rounded-full text-slate-500" />
                </Link>
            )}
        </div>
    );
};

export default Appointment2;
