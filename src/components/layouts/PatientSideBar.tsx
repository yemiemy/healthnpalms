"use client";
import { cn } from "@/lib/utils";
import {
    CalendarDaysIcon,
    ChevronLeftIcon,
    ChevronRightCircleIcon,
    ChevronRightIcon,
    LayoutGridIcon,
    SettingsIcon,
    StethoscopeIcon,
    UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
    isDashboardActive?: boolean;
    isPatientsActive?: boolean;
    isAppointmentsActive?: boolean;
    isSettingsActive?: boolean;
};

const PatientSideBar = (props: Props) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);
    return collapsed ? (
        <div className="bg-green-100 max-w-[10%] min-h-screen max-h-screen break-words hidden md:flex md:flex-col">
            <div className="relative p-4">
                <StethoscopeIcon
                    className="bg-green-500 p-1 rounded-md"
                    width={30}
                    height={30}
                    color="white"
                />
                <div
                    className="top-[37.5%] left-[87%] absolute cursor-pointer bg-white border rounded-full"
                    onClick={() => setCollapsed(!collapsed)}>
                    <ChevronRightIcon
                        className="border rounded-full text-slate-500 cursor-pointer"
                        width={15}
                        height={15}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </div>
            </div>
            <Link
                href="/staff"
                className={cn("my-4 px-4 flex justify-center relative", {
                    "bg-white py-2 border-l-2 border-green-500":
                        props.isDashboardActive,
                })}>
                <LayoutGridIcon
                    className="hover:text-green-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
            <Link
                href="/staff/patients"
                className={cn("my-4 px-4 flex justify-center relative", {
                    "bg-white py-2 border-l-2 border-green-500":
                        props.isPatientsActive,
                })}>
                <UserIcon
                    className="hover:text-green-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
            <Link
                href="/"
                className={cn("my-4 px-4 flex justify-center relative", {
                    "bg-white py-2 border-l-2 border-green-500":
                        props.isAppointmentsActive,
                })}>
                <CalendarDaysIcon
                    className="hover:text-green-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
            <Link
                href="/account/settings"
                className={cn("my-4 px-4 flex justify-center relative", {
                    "bg-white py-2 border-l-2 border-green-500":
                        props.isSettingsActive,
                })}>
                <SettingsIcon
                    className="hover:text-green-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
        </div>
    ) : (
        <div className="bg-green-100 max-w-[20%] min-h-screen max-h-screen break-words hidden md:flex md:flex-col">
            <div className="relative p-4 flex items-center gap-1">
                <StethoscopeIcon
                    className="bg-green-500 p-1 rounded-md"
                    width={30}
                    height={30}
                    color="white"
                />{" "}
                <h1 className="font-semibold">HealthInPalms</h1>
                <div
                    className="top-[37.5%] left-[95%] absolute cursor-pointer bg-white border rounded-full"
                    onClick={() => setCollapsed(!collapsed)}>
                    <ChevronLeftIcon
                        className="border rounded-full text-slate-500 cursor-pointer"
                        width={15}
                        height={15}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </div>
            </div>
            <Link
                href="/"
                className={cn(
                    "my-4 px-4 flex items-center text-sm text-slate-500 hover:text-green-500",
                    {
                        "border-l-2 border-green-500 bg-white py-2":
                            props.isDashboardActive,
                    }
                )}>
                <LayoutGridIcon
                    className="hover:text-green-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Dashboard
            </Link>

            <Link
                href="/"
                className={cn(
                    "my-4 px-4 flex items-center text-sm text-slate-500 hover:text-green-500",
                    {
                        "border-l-2 border-green-500 bg-white py-2":
                            props.isPatientsActive,
                    }
                )}>
                <UserIcon
                    className="hover:text-green-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Patients
            </Link>

            <Link
                href="/"
                className={cn(
                    "my-4 px-4 flex items-center text-sm text-slate-500 hover:text-green-500",
                    {
                        "border-l-2 border-green-500 bg-white py-2":
                            props.isAppointmentsActive,
                    }
                )}>
                <CalendarDaysIcon
                    className="hover:text-green-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Appointments
            </Link>

            <Link
                href="/account/settings"
                className={cn(
                    "my-4 px-4 flex items-center text-sm text-slate-500 hover:text-green-500",
                    {
                        "border-l-2 border-green-500 bg-white py-2":
                            props.isSettingsActive,
                    }
                )}>
                <SettingsIcon
                    className="hover:text-green-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Settings
            </Link>
        </div>
    );
};

export default PatientSideBar;
