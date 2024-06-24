"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataColumnHeader";
import { DoctorPatientTableModel } from "@/lib/models/staff/models";

export const columns: ColumnDef<DoctorPatientTableModel>[] = [
    {
        id: "S/N",
        header: "#",
        cell: ({ row }) => {
            return <span>{row.index + 1}</span>;
        },
    },
    {
        accessorKey: "full_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Full Name" />
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "gender",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Gender" />
        ),
    },
];
