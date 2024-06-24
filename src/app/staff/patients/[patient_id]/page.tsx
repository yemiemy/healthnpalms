import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/staff/patients/single-patient/Main";
import { cookies } from "next/headers";
import React from "react";
import { toast } from "sonner";
import axios from "@/lib/api";

type Props = {
    params: {
        patient_id: string;
    };
};

const getPatient = async (token: string, patient_id: string) => {
    try {
        const response = await axios.get("/accounts/staff/patient/", {
            params: {
                patient_id,
            },
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data;
    } catch (err: any) {
        console.log("Error", err);
    }
};

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

const Page = async ({ params: { patient_id } }: Props) => {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        toast.error("Please login to continue.");
        return Response.redirect(new URL("/account/login?next=/", "/"));
    }

    const patient = await getPatient(token, patient_id);
    const doctor = await getDoctor(token);
    return (
        <div className="flex">
            <SideBar isPatientsActive />
            <Main patient={patient} doctor={doctor} />
        </div>
    );
};

export default Page;
