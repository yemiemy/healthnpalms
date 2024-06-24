import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/staff/patients/Main";
import React from "react";
import axios from "@/lib/api";
import { toast } from "sonner";
import { cookies } from "next/headers";

type Props = {};

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
    }
};

const Page = async (props: Props) => {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        return Response.redirect(new URL("/account/login?next=/", "/"));
    }

    const doctor = await getDoctor(token);
    return (
        <div className="flex">
            <SideBar isPatientsActive />
            <Main doctor={doctor} token={token} />
        </div>
    );
};

export default Page;
