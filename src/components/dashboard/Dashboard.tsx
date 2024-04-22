"use client";
import React from "react";
import SideBar from "../layouts/SideBar";
import Main from "./Main";
import { User } from "@/lib/models/accounts/models";
import axios from "@/lib/api";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {};

const Dashboard = (props: Props) => {
    const router = useRouter();
    const [user, setUser] = React.useState<User>();
    const token = Cookies.get("__token");

    const getUser = React.useCallback(async () => {
        try {
            const response = await axios.get("/accounts/details/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setUser(data);
        } catch (err: any) {
            console.log("Error", err);
            toast.error("Couldn't connect with the server");
        }
    }, [token]);

    React.useEffect(() => {
        if (!token) {
            toast.error("Please login to continue.");
            router.push("/account/login");
        }
    }, [token, router]);

    React.useEffect(() => {
        getUser();
    }, [getUser]);
    return (
        <div className="flex overflow-hidden">
            <SideBar isDashboardActive={true} />
            <Main user={user} />
        </div>
    );
};

export default Dashboard;
