"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { DataTable } from "./medical-history-table/data-table";
import {
    Patient,
    VisitHistory,
    VisitHistoryTableModel,
} from "@/lib/models/patient/models";
import { MedicalProfessional } from "@/lib/models/staff/models";
import { User } from "@/lib/models/accounts/models";
import { columns } from "./medical-history-table/columns";

type Props = {};

const VisitHistoryTable = (props: Props) => {
    const [data, setData] = useState<VisitHistoryTableModel[]>([]);
    async function getData() {
        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: "randomUUID()",
                doctor: "Jegede Sanusi",
                visit_date: new Date().toDateString(),
            });
        }
        setData(data);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Visit History</CardTitle>
                <CardDescription>
                    Here&apos;s a quick overview of your visit history to the
                    medical center.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={data} />
            </CardContent>
        </Card>
    );
};

export default VisitHistoryTable;
