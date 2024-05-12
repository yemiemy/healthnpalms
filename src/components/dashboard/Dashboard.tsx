import React from "react";
import SideBar from "../layouts/SideBar";
import Main from "./Main";
import axios from "@/lib/api";
import { toast } from "sonner";
import { cookies } from "next/headers";

type Props = {};

const getUser = async (token: string) => {
    try {
        const response = await axios.get("/accounts/details/", {
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

const Dashboard = async (props: Props) => {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        toast.error("Please login to continue.");
        return Response.redirect(new URL("/account/login?next=/", "/"));
    }

    const user = await getUser(token);

    return (
        <div className="flex overflow-hidden">
            <SideBar isDashboardActive={true} />
            <Main user={user} />
        </div>
    );
};

export default Dashboard;
