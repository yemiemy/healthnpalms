"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreVerticalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./DataColumnHeader";
import {
    VisitHistory,
    VisitHistoryTableModel,
} from "@/lib/models/patient/models";
import { MedicalProfessional } from "@/lib/models/staff/models";
import Link from "next/link";

export const columns: ColumnDef<VisitHistoryTableModel>[] = [
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
            const visit_history = row.original;
            return (
                <Link
                    // @ts-ignore
                    href={`/visit-history/${visit_history.id}`}>
                    <div className="">{visit_history.doctor}</div>
                </Link>
            );
        },
    },
    {
        accessorKey: "visit_date",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Visit Date" />
        ),
        cell: ({ row }) => {
            const visit_history = row.original;
            const date = visit_history.visit_date
                ? new Date(visit_history.visit_date).toDateString()
                : "";
            return (
                <Link
                    // @ts-ignore
                    href={`/visit-history/${visit_history.id}`}>
                    <div className="">{date}</div>
                </Link>
            );
        },
    },
];
