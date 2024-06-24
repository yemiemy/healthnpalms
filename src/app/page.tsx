"use client";
import axios from "@/lib/api";
import { toast } from "sonner";
import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/patients/dashboard/Main";
import { useCallback, useEffect, useState } from "react";
import { User } from "@/lib/models/accounts/models";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
    const token = Cookies.get("__token");
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    const [user, setUser] = useState<User>();

    const getUser = useCallback(async () => {
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
            toast.error("Unable to fetch data. Please try again");
        }
    }, [token]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        // This code runs only on the client
        setIsClient(true);
    }, []);

    if (!token || token.length == 0) {
        if (isClient) {
            toast.error("Please login to continue.");
            router.replace("/account/login?next=/staff/patients/");
        }
        return <></>;
    }

    return (
        user && (
            <div className="flex overflow-hidden">
                <SideBar isDashboardActive isPatient />
                <Main user={user} />
            </div>
        )
    );
}
