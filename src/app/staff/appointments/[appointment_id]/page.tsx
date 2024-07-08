"use client";
import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import SideBar from "@/components/layouts/SideBar";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { MedicalProfessional } from "@/lib/models/staff/models";
import axios from "@/lib/api";
import MainLayout from "./components/MainLayout";
import { Appointment } from "@/lib/models/shared/models";

type Props = {
    params: {
        appointment_id: string;
    };
};

const Page = ({ params: { appointment_id } }: Props) => {
    const token = Cookies.get("__token");
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    const [appointment, setAppointment] = useState<Appointment>();

    const getAppointment = useCallback(async () => {
        try {
            const response = await axios.get(
                `/appointments/staff/${appointment_id}/`,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            const data = await response.data;
            setAppointment(data);
        } catch (err: any) {
            console.log("Error", err);
        }
    }, [appointment_id, token]);

    useEffect(() => {
        getAppointment();
    }, [getAppointment]);

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
        appointment && (
            <div className="flex">
                <SideBar isPatientsActive />
                <div className="flex-1 w-full min-h-screen h-screen text-black dark:text-slate-300 overflow-y-auto">
                    <DashboardNavBar
                        user={appointment.medical_professional?.user}
                    />
                    <MainLayout token={token} appointment={appointment} />
                </div>
            </div>
        )
    );
};

export default Page;
