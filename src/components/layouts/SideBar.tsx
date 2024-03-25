"use client";
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

type Props = {};

const SideBar = (props: Props) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);
    return !collapsed ? (
        <div className="bg-white max-w-[10%] min-h-screen max-h-screen break-words hidden md:flex md:flex-col">
            <div className="px-4 pt-2 pb-4 relative">
                <StethoscopeIcon
                    className="bg-blue-500 p-1 rounded-md"
                    width={30}
                    height={30}
                    color="white"
                />
                <div
                    className="top-[37%] left-[92%] absolute cursor-pointer"
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
                href="/"
                className="my-4 px-4 border-l-2 border-blue-500 flex justify-center relative">
                <LayoutGridIcon
                    className="hover:text-blue-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
            <Link href="/" className="my-4 px-4 flex justify-center">
                <UserIcon
                    className="hover:text-blue-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
            <Link href="/" className="my-4 px-4 flex justify-center">
                <CalendarDaysIcon
                    className="hover:text-blue-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
            <Link href="/" className="my-4 px-4 flex justify-center">
                <SettingsIcon
                    className="hover:text-blue-500 text-slate-500"
                    width={15}
                    height={15}
                />
            </Link>
        </div>
    ) : (
        <div className="bg-white max-w-[20%] min-h-screen max-h-screen break-words hidden md:flex md:flex-col">
            <div className="p-4 relative flex items-center gap-1">
                <StethoscopeIcon
                    className="bg-blue-500 p-1 rounded-md"
                    width={20}
                    height={20}
                    color="white"
                />{" "}
                <h1 className="text-sm font-semibold">HealthNPalms</h1>
                <div
                    className="top-[37%] left-[94%] absolute cursor-pointer"
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
                className="my-4 px-4 border-l-2 border-blue-500 flex items-center hover:text-blue-500 text-sm text-slate-500 ">
                <LayoutGridIcon
                    className="hover:text-blue-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Dashboard
            </Link>

            <Link
                href="/"
                className="my-4 px-4 flex items-center text-sm text-slate-500 hover:text-blue-500">
                <UserIcon
                    className="hover:text-blue-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Patients
            </Link>

            <Link
                href="/"
                className="my-4 px-4 flex items-center text-sm text-slate-500 hover:text-blue-500">
                <CalendarDaysIcon
                    className="hover:text-blue-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Appointments
            </Link>

            <Link
                href="/"
                className="my-4 px-4 flex items-center text-sm text-slate-500 hover:text-blue-500">
                <SettingsIcon
                    className="hover:text-blue-500 text-slate-500 mr-1"
                    width={15}
                    height={15}
                />
                Settings
            </Link>
        </div>
    );
};

export default SideBar;
