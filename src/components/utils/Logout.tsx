"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Logout = (props: Props) => {
    const router = useRouter();
    const handleLogout = (e: any) => {
        e.preventDefault();
        Cookies.remove("__token");
        Cookies.remove("is_staff");

        router.replace("/");
    };

    return (
        <span onClick={handleLogout} className="cursor-pointer">
            Log out
        </span>
    );
};

export default Logout;
