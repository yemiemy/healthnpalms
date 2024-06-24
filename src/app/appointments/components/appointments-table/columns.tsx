"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { format } from "date-fns";
import { AppointmentTableModel } from "@/lib/models/shared/models";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<AppointmentTableModel>[] = [
    {
        id: "S/N",
        header: "#",
        cell: ({ row }) => {
            return <span>{row.index + 1}</span>;
        },
    },
    {
        accessorKey: "doctor",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Doctor" />
        ),
        cell: ({ row }) => {
            const appointment = row.original;
            return <div className="">{appointment.doctor}</div>;
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
            <DataTableColumnHeader column={column} title="Appointment Time" />
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
                            Update
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
