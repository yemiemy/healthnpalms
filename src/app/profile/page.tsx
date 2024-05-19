import PatientSideBar from "@/components/layouts/PatientSideBar";
import React from "react";
import axios from "@/lib/api";
import { toast } from "sonner";
import Main from "@/components/patients/profile/Main";
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
        // toast.error("Couldn't connect with the server");
    }
};

const Page = async (props: Props) => {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        toast.error("Please login to continue.");
        return Response.redirect(new URL("/account/login?next=/", "/profile"));
    }

    const user = await getUser(token);
    return (
        <div className="flex overflow-hidden">
            <PatientSideBar isPatientsActive isPatient />
            <Main user={user} />
        </div>
    );
};

export default Page;
