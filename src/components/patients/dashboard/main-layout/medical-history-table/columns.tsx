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
            const date = new Date(visit_history.visit_date);
            return (
                <Link
                    // @ts-ignore
                    href={`/visit-history/${visit_history.id}`}>
                    <div className="">{date.toDateString()}</div>
                </Link>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const visit_history = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(visit_history.id)
                            }>
                            Copy patient ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={`/visit-history/${visit_history.id}`}>
                                View patient details
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
