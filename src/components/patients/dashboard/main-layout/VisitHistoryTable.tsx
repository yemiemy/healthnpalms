import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { DataTable } from "./medical-history-table/data-table";
import {
    Patient,
    VisitHistory,
    VisitHistoryTableModel,
} from "@/lib/models/patient/models";
import { randomUUID } from "crypto";
import { MedicalProfessional } from "@/lib/models/staff/models";
import { User } from "@/lib/models/accounts/models";
import { columns } from "./medical-history-table/columns";

async function getData(): Promise<VisitHistoryTableModel[]> {
    // Fetch data from your API here.
    let data = [];
    for (let i = 0; i < 1000; i++) {
        data.push({
            id: randomUUID(),
            doctor: "Jegede Sanusi",
            visit_date: new Date().toDateString(),
        });
    }

    // for (let i = 0; i < 1000; i++) {
    //     data.push({
    //         id: randomUUID(),
    //         patient: {
    //             id: randomUUID(),
    //             full_name: "Benson Alakija",
    //             gender: i % 3 === 0 ? "M" : "F",
    //             email: "demo@email.com",
    //             date_of_birth: new Date().toLocaleString(),
    //             amount: 250,
    //             status: "pending",
    //         } as Patient,
    //         medical_professional: {
    //             id: randomUUID(),
    //             user: {
    //                 id: randomUUID(),
    //                 first_name: "Jegede",
    //                 last_name: "Sanusi",
    //                 avatar: "/avatar-1.jpg",
    //                 date_of_birth: new Date().toLocaleDateString(),
    //                 phone_number: "0123456789",
    //                 email: "email@em.com",
    //                 is_email_verified: true,
    //                 is_phone_number_verified: true,
    //                 is_staff: true,
    //                 is_medical_professional: true,
    //             } as User,
    //             medical_license_number: "A7DHJDHJGHGD",
    //             specialization: "Opthamology",
    //             education_and_qualifications: "MSc, PhD",
    //             work_history: "",
    //             certifications: "",
    //             department: "Eye Clinic",
    //         } as MedicalProfessional,
    //         visit_date: new Date().toDateString(),
    //         reason_for_visit: "",
    //         treatments_received: "",
    //         physician_notes: "",
    //     });
    // }
    return data;
}

type Props = {};

const VisitHistoryTable = async (props: Props) => {
    const data = await getData();
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
