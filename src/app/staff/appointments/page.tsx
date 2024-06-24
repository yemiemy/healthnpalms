"use client";

import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import SideBar from "@/components/layouts/SideBar";
import { User } from "@/lib/models/accounts/models";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import axios from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "./components/appointments-table/data-table";
import {
    Appointment,
    DoctorAppointmentTableModel,
} from "@/lib/models/shared/models";
import { toast } from "sonner";
// import { columns } from "./components/appointments-table/columns";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DataTableColumnHeader } from "./components/appointments-table/DataTableColumnHeader";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {};

export const handleAppointmentStatusUpdate = async (
    appointment: DoctorAppointmentTableModel,
    status: string
) => {
    const token = Cookies.get("__token");
    try {
        await axios.put(
            `/appointments/staff/${appointment.id}/`,
            JSON.stringify({
                medical_professional_id: appointment.medical_professional_id,
                start_time: appointment.start_time,
                end_time: appointment.end_time,
                status,
                is_status_update: true,
            }),
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
        toast.success("Appointment updated successfully.");
    } catch (err: any) {
        console.log("Error getting user:", err);
        toast.error("Unable to update your appointment. Please try again.");
    }
};

const Page = (props: Props) => {
    const router = useRouter();
    const token = Cookies.get("__token");
    const [user, setUser] = useState<User>();
    const [appointments, setAppointments] = React.useState<
        DoctorAppointmentTableModel[]
    >([]);
    const [refreshAppointments, setRefreshAppointments] =
        React.useState<boolean>(false);

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

    const getAppointmentsData = useCallback(async () => {
        try {
            const response = await axios.get("/appointments/staff/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            const results = data.results;
            let tableModel: DoctorAppointmentTableModel[] = [];
            results.forEach((appointment: Appointment) => {
                tableModel.push({
                    id: appointment.id,
                    medical_professional_id:
                        appointment.medical_professional.id,
                    patient: appointment.patient.user.full_name,
                    note: appointment.note,
                    status: appointment.status,
                    start_time: appointment.start_time,
                    end_time: appointment.end_time,
                    created_at: appointment.created_at,
                });
            });
            setAppointments(tableModel);
        } catch (err: any) {
            console.log("Error getting user:", err);
            toast.error("Unable to fetch your appointments. Please try again.");
        }
    }, [token]);

    useEffect(() => {
        getUser();
        getAppointmentsData();
    }, [getUser, getAppointmentsData]);

    useEffect(() => {
        getAppointmentsData();
    }, [refreshAppointments, getAppointmentsData]);

    const columns: ColumnDef<DoctorAppointmentTableModel>[] = [
        {
            id: "S/N",
            header: "#",
            cell: ({ row }) => {
                return <span>{row.index + 1}</span>;
            },
        },
        {
            accessorKey: "patient",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Patient" />
            ),
            cell: ({ row }) => {
                const appointment = row.original;
                return <div className="">{appointment.patient}</div>;
            },
        },
        {
            accessorKey: "note",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Note" />
            ),
            cell: ({ row }) => {
                const appointment = row.original;
                return <div className="">{appointment.note}</div>;
            },
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Status" />
            ),
            cell: ({ row }) => {
                const appointment = row.original;
                return (
                    <Badge
                        variant={
                            appointment.status === "Cancelled"
                                ? "destructive"
                                : appointment.status === "Pending"
                                ? "secondary"
                                : "default"
                        }
                        className={cn({
                            "bg-primary/50 text-white hover:bg-primary/80":
                                appointment.status === "Completed",
                        })}>
                        {appointment.status}
                    </Badge>
                );
            },
        },
        {
            accessorKey: "start_time",
            header: ({ column }) => (
                <DataTableColumnHeader
                    column={column}
                    title="Appointment Time"
                />
            ),
            cell: ({ row }) => {
                const appointment = row.original;
                return (
                    <div className="">
                        {format(appointment.start_time, "PPPP KK:mm:ss a")}
                    </div>
                );
            },
        },
        {
            accessorKey: "created_at",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Booked At" />
            ),
            cell: ({ row }) => {
                const appointment = row.original;
                return (
                    <div className="">
                        {format(appointment.created_at, "PPPP KK:mm:ss a")}
                    </div>
                );
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const appointment = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={async () => {
                                    await handleAppointmentStatusUpdate(
                                        appointment,
                                        "Accepted"
                                    );
                                    setRefreshAppointments((prev) => !prev);
                                }}>
                                Accept
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={async () => {
                                    await handleAppointmentStatusUpdate(
                                        appointment,
                                        "Completed"
                                    );
                                    setRefreshAppointments((prev) => !prev);
                                }}>
                                Complete
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-destructive cursor-pointer"
                                onClick={async () => {
                                    await handleAppointmentStatusUpdate(
                                        appointment,
                                        "Cancelled"
                                    );
                                    setRefreshAppointments((prev) => !prev);
                                }}>
                                Cancel
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <div className="flex overflow-hidden">
            <SideBar isAppointmentsActive />
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
                        </div>

                        <Card>
                            <CardContent className="flex justify-between gap-4 p-6 w-full items-center">
                                <DataTable
                                    columns={columns}
                                    data={appointments}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
