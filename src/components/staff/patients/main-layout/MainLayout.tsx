import React from "react";
import InfoCards from "./InfoCards";
import { DataTable } from "../allPatientsTable/data-table";
import { columns } from "../allPatientsTable/columns";
import { Patient } from "@/lib/models/patient/models";

async function getData(): Promise<Patient[]> {
    // Fetch data from your API here.
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            id: "728ed52f",
            full_name: "Sola Ogundipe",
            gender: i % 2 == 0 ? "M" : "F",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        });
    }
    return data;
}
type Props = {};

const MainLayout = async (props: Props) => {
    const data = await getData();
    return (
        <div className="p-4 w-full">
            <InfoCards />
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default MainLayout;
