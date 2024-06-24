import React from "react";
import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/staff/dashboard/Main";
import axios from "@/lib/api";
import { toast } from "sonner";
import { cookies } from "next/headers";

const getDoctor = async (token: string) => {
    try {
        const response = await axios.get("/accounts/staff/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data;
    } catch (err: any) {
        console.log("Error", err);
        toast.error("Couldn't connect with the server");
    }
};

export default async function Home() {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        toast.error("Please login to continue.");
        return Response.redirect(new URL("/account/login?next=/", "/"));
    }

    const doctor = await getDoctor(token);

    return (
        <div className="flex overflow-hidden">
            <SideBar isDashboardActive={true} />
            <Main doctor={doctor} />
        </div>
    );
}
