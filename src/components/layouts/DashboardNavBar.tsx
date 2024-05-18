"use client";
import { User } from "@/lib/models/accounts/models";
import { BellIcon, ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { AvatarDropdownMenu } from "./AvatarDropdownMenu";

type Props = {
    user: User | undefined;
};

const DashboardNavBar = ({ user }: Props) => {
    return (
        <div className="flex items-center py-4 px-8 w-full bg-white text-slate-800 border-b dark:bg-slate-800 dark:text-white">
            <div className="relative flex items-center justify-between w-full">
                <div className="flex w-full max-w-full justify-between relative">
                    <h1 className="max-w-60 font-semibold">Dashboard</h1>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <MenuIcon className="transition-all ease-in duration-500 text-slate-500" />
                            </DropdownMenuTrigger>
                            <AvatarDropdownMenu
                                mobile
                                staff={
                                    user?.is_staff &&
                                    user.is_medical_professional
                                }
                            />
                        </DropdownMenu>
                    </div>
                    {/* Mobile view navbar
                    <ul
                        className={
                            open
                                ? "absolute border p-4 shadow-md rounded-sm bg-white top-6 left-1/2 z-10 min-w-[50%] max-w-[50%] text-wrap break-words transition-all origin-top duration-500 ease-in md:hidden"
                                : "hidden"
                        }>
                        <li className="cursor-pointer font-medium hover:font-semibold">
                            Notifications
                        </li>
                        <li className="cursor-pointer font-medium hover:font-semibold pt-2">
                            Profile
                        </li>
                        <li className="cursor-pointer font-medium hover:font-semibold pt-2 flex gap-1">
                            <span className="pt-1">
                                <LogOutIcon width={16} height={16} />
                            </span>
                            Sign Out
                        </li>
                    </ul> */}
                </div>
                <nav className="hidden md:flex md:gap-8 md:ml-auto md:flex-shrink-0 md:max-w-full md:flex-wrap items-center">
                    <BellIcon
                        className="text-slate-500"
                        width={15}
                        height={15}
                    />
                    <div className="flex gap-2 items-center">
                        <Image
                            src={user?.avatar ? user.avatar : "/avatar-2.jpg"}
                            className="rounded-full w-auto h-auto"
                            alt="user-avatar"
                            width={30}
                            height={30}
                        />
                        <h4>{user?.first_name + " " + user?.last_name}</h4>
                        <div className="w-4 h-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <ChevronDown
                                        className="text-slate-500 cursor-pointer"
                                        width={16}
                                        height={16}
                                        size={16}
                                    />
                                </DropdownMenuTrigger>
                                <AvatarDropdownMenu />
                            </DropdownMenu>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default DashboardNavBar;
