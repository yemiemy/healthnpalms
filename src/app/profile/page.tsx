import SideBar from "@/components/layouts/SideBar";
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
    }
};

const Page = async (props: Props) => {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        return Response.redirect(new URL("/account/login?next=/", "/profile"));
    }

    const user = await getUser(token);
    return (
        <div className="flex overflow-hidden">
            <SideBar
                isPatientsActive
                isPatient={!(user.is_staff && user.is_medical_professional)}
            />
            <Main initialUser={user} token={token} />
        </div>
    );
};

export default Page;
