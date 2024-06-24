"use client";
import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/staff/patients/Main";
import axios from "@/lib/api";
import { toast } from "sonner";
import React, { useCallback, useEffect, useState } from "react";
import { MedicalProfessional } from "@/lib/models/staff/models";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Props = {};

const Page = (props: Props) => {
    const token = Cookies.get("__token");
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    const [doctor, setDoctor] = useState<MedicalProfessional>();

    const getDoctor = useCallback(async () => {
        try {
            const response = await axios.get("/accounts/staff/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setDoctor(data);
        } catch (err: any) {
            console.log("Error", err);
        }
    }, [token]);

    useEffect(() => {
        getDoctor();
    }, [getDoctor]);

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
        doctor && (
            <div className="flex">
                <SideBar isPatientsActive />
                <Main doctor={doctor} token={token} />
            </div>
        )
    );
};

export default Page;
