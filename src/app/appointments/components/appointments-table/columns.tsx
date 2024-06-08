"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { AppointmentTableModel } from "@/lib/models/patient/models";
import { format } from "date-fns";

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
            return <div className="">{appointment.status}</div>;
        },
    },
    {
        accessorKey: "start_time",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Appointment Time" />
        ),
        cell: ({ row }) => {
            const appointment = row.original;
            const date = new Date(appointment.start_time);
            return <div className="">{format(date, "PPPP KK:mm:ss a")}</div>;
        },
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Booked At" />
        ),
        cell: ({ row }) => {
            const appointment = row.original;
            const date = new Date(appointment.start_time);
            return <div className="">{format(date, "PPPP KK:mm:ss a")}</div>;
        },
    },
];
