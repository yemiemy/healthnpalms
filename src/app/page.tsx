import axios from "@/lib/api";
import { toast } from "sonner";
import { cookies } from "next/headers";
import PatientSideBar from "@/components/layouts/PatientSideBar";
import Main from "@/components/patients/dashboard/Main";

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
        toast.error("Couldn't connect with the server");
    }
};

export default async function Home() {
    const token = cookies().get("__token")?.value;

    if (!token || token.length == 0) {
        toast.error("Please login to continue.");
        return Response.redirect(new URL("/account/login?next=/", "/"));
    }

    const user = await getUser(token);
    return (
        <div className="flex overflow-hidden">
            <PatientSideBar isDashboardActive isPatient />
            <Main user={user} />
        </div>
    );
}
