"use client";

import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import PatientSideBar from "@/components/layouts/PatientSideBar";
import { User } from "@/lib/models/accounts/models";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import axios from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AppointmentScheduleModal from "./components/AppointmentScheduleModal";
import { DataTable } from "./components/appointments-table/data-table";
import { columns } from "./components/appointments-table/columns";
import { Appointment, Patient } from "@/lib/models/patient/models";
import { MedicalProfessional } from "@/lib/models/staff/models";
import { nanoid } from "ai";

type Props = {};

const Page = (props: Props) => {
    const router = useRouter();
    const token = Cookies.get("__token");
    const [user, setUser] = useState<User>();

    const getUser = useCallback(async () => {
        if (!token) {
            router.push("/login?next=" + window.location.href);
        }
        try {
            const response = await axios.get("/accounts/details/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setUser(data);
        } catch (err: any) {
            console.log("Error getting user:", err);
        }
    }, [token, router]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    const getData = () => {
        // Fetch data from your API here.
        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: nanoid(),
                doctor: "Jegede Sanusi",
                note: "Some very long note that should take up some very long space you know. should take up some very long space you know. should take up some very long space you know. should take up some very long space you know. should take up some very long space you know. should take up some very long space you know.",
                start_time: new Date().toISOString(),
                end_time: new Date().toISOString(),
                created_at: new Date().toISOString(),
                status: "PENDING",
            });
        }
        return data;
    };

    return (
        <div className="flex overflow-hidden">
            <PatientSideBar isAppointmentsActive isPatient />
            <main className="flex-1 flex flex-col w-full h-screen max-h-dvh bg-background overflow-auto">
                <DashboardNavBar user={user} />
                <div className="p-8 md:p-32 flex md:flex-row flex-col gap-8 w-full">
                    <div className="flex-1 flex flex-col gap-8 w-full">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="font-semibold text-3xl">
                                    Appointments
                                </h1>
                                <p>
                                    You can view your appointments details
                                    below.
                                </p>
                            </div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="text-base">
                                        <PlusIcon className="mr-1" /> Book
                                    </Button>
                                </DialogTrigger>
                                <AppointmentScheduleModal />
                            </Dialog>
                        </div>

                        <Card>
                            <CardContent className="flex justify-between gap-4 p-6 w-full items-center">
                                <DataTable columns={columns} data={getData()} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
