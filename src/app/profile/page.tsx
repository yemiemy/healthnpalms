"use client";
import SideBar from "@/components/layouts/SideBar";
import React, { useCallback, useState } from "react";
import axios from "@/lib/api";
import { toast } from "sonner";
import Main from "@/components/patients/profile/Main";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { User } from "@/lib/models/accounts/models";

type Props = {};

const Page = (props: Props) => {
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

    React.useEffect(() => {
        getUser();
    }, [getUser]);

    React.useEffect(() => {
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
                <SideBar
                    isPatientsActive
                    isPatient={
                        !(user?.is_staff && user?.is_medical_professional)
                    }
                />
                <Main initialUser={user} token={token} />
            </div>
        )
    );
};

export default Page;
