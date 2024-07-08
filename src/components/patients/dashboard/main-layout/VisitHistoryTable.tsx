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
import React, { useCallback, useEffect, useState } from "react";
import { DataTable } from "./medical-history-table/data-table";
import {
    Patient,
    VisitHistory,
    VisitHistoryTableModel,
} from "@/lib/models/patient/models";
import { MedicalProfessional } from "@/lib/models/staff/models";
import { User } from "@/lib/models/accounts/models";
import { columns } from "./medical-history-table/columns";
import axios from "@/lib/api";
import Cookies from "js-cookie";
import { toast } from "sonner";

type Props = {};

const VisitHistoryTable = (props: Props) => {
    const token = Cookies.get("__token");
    const [data, setData] = useState<VisitHistoryTableModel[]>([]);

    const getData = useCallback(async () => {
        try {
            const response = await axios.get("/appointments/visit-history/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            const results = data.results;
            let tableModel: VisitHistoryTableModel[] = [];
            results.forEach((visit: VisitHistory) => {
                tableModel.push({
                    id: visit.id,
                    doctor: visit.appointment.medical_professional.user
                        .full_name,
                    visit_date: visit.visit_date,
                });
            });
            setData(tableModel);
        } catch (err: any) {
            console.log("Error getting user:", err);
            toast.error(
                "Unable to fetch your visit history. Please try again."
            );
        }
    }, [token]);

    useEffect(() => {
        getData();
    }, [getData]);
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
