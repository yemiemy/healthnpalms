import { Button } from "@/components/ui/button";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Appointment = (props: Props) => {
    return (
        <div className="w-full mb-4 p-4 bg-white rounded-md text-slate-800 dark:bg-slate-800 dark:text-slate-100">
            <h1 className="font-semibold">Today, 12:01 AM</h1>

            <div className="flex mt-2 gap-2 w-full">
                <Image
                    src="/avatar-1.jpg"
                    width={50}
                    height={50}
                    alt="user-avatar"
                    className="rounded-full"
                />
                <div>
                    <h1 className="font-semibold">Yemi Rasheed</h1>
                    <small>Opthamologist</small>
                </div>
            </div>
            <div className="font-light leading-none mt-2 w-full">
                <small>
                    some description of appointments Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maxime mollitia,
                </small>
            </div>

            <div className="flex flex-col xl:flex-row gap-2 mt-6 w-full">
                <Button size="sm" className="bg-blue-500">
                    <VideoIcon color="#ffffff" className="pr-2" /> Live
                    Appointment
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-400 hover:bg-blue-400 hover:text-white">
                    Re-schedule
                </Button>
            </div>
        </div>
    );
};

export default Appointment;
