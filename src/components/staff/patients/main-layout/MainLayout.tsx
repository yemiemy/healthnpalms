"use client";
import React, { useCallback, useEffect, useState } from "react";
import InfoCards from "./InfoCards";
import { DataTable } from "../allPatientsTable/data-table";
import { columns } from "../allPatientsTable/columns";
import {
    DoctorPatientTableModel,
    MedicalProfessional,
} from "@/lib/models/staff/models";
import { toast } from "sonner";
import axios from "@/lib/api";
import { Appointment } from "@/lib/models/shared/models";

type Props = {
    doctor?: MedicalProfessional;
    token: string;
};

const MainLayout = ({ doctor, token }: Props) => {
    const [data, setData] = useState<DoctorPatientTableModel[]>();
    const getData = useCallback(async () => {
        try {
            const response = await axios.get("/appointments/staff/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            const results = data.results;
            let tableModel: DoctorPatientTableModel[] = [];
            results.forEach((appointment: Appointment) => {
                if (
                    tableModel.filter(
                        (data) => data.email === appointment.patient.user.email
                    ).length === 0
                ) {
                    tableModel.push({
                        medical_professional: appointment.medical_professional,
                        patient: appointment.patient,
                        full_name: appointment.patient.user.full_name,
                        gender: appointment.patient.user.gender,
                        email: appointment.patient.user.email,
                    });
                }
            });
            setData(tableModel);
        } catch (err: any) {
            console.log("Error getting user:", err);
            toast.error(
                "Unable to fetch your patients data. Please try again."
            );
            throw new Error(
                "Unable to fetch your patients data. Please try again."
            );
        }
    }, [token]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        data && (
            <div className="p-4 w-full">
                <InfoCards />
                <DataTable columns={columns} data={data} />
            </div>
        )
    );
};

export default MainLayout;
