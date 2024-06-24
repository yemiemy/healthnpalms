"use client";
import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/staff/patients/single-patient/Main";
import { toast } from "sonner";
import axios from "@/lib/api";
import React, { useCallback, useEffect, useState } from "react";
import { MedicalProfessional } from "@/lib/models/staff/models";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Patient } from "@/lib/models/patient/models";

type Props = {
    params: {
        patient_id: string;
    };
};

const Page = ({ params: { patient_id } }: Props) => {
    const token = Cookies.get("__token");
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    const [doctor, setDoctor] = useState<MedicalProfessional>();
    const [patient, setPatient] = useState<Patient>();

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

    const getPatient = useCallback(async () => {
        try {
            const response = await axios.get("/accounts/staff/patient/", {
                params: {
                    patient_id,
                },
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setPatient(data);
        } catch (err: any) {
            console.log("Error", err);
        }
    }, [patient_id, token]);

    useEffect(() => {
        getDoctor();
        getPatient();
    }, [getDoctor, getPatient]);

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
        patient &&
        doctor && (
            <div className="flex">
                <SideBar isPatientsActive />
                <Main patient={patient} doctor={doctor} />
            </div>
        )
    );
};

export default Page;
