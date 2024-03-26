import Link from "next/link";
import React from "react";
import Appointment from "./Appointment";
import Appointment2 from "./Appointment2";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, MoveRightIcon } from "lucide-react";

type Props = {};

const UpcomingAppointmentsCard = (props: Props) => {
    return (
        <div className="w-full">
            {/* <div className="flex text-black mb-1 w-full gap-1 items-center">
                <h1 className="text-sm">Upcoming appointments</h1>
                <Link
                    href="/"
                    className="ms-auto text-blue-500 text-xs hover:underline">
                    View all
                </Link>
            </div> */}

            {/* <Appointment />
            <Appointment /> */}

            <Appointment2 avatar="/avatar-1.jpg" bgColor="bg-blue-100" />
            <Appointment2 avatar="/avatar-2.jpg" bgColor="bg-yellow-100" />
            <Appointment2 avatar="/avatar-1.jpg" bgColor="bg-red-100" />
            <Appointment2 avatar="/avatar-2.jpg" bgColor="bg-green-100" />

            <Button
                className="w-full bg-slate-200 text-purple-500"
                variant="secondary">
                View All Appointments{" "}
                <MoveRightIcon className="ml-1" width={15} height={15} />
            </Button>
        </div>
    );
};

export default UpcomingAppointmentsCard;
