"use client";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
    Filler,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
);

type Props = {};

const patientsAppointmentsDataLabels = [
    "",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];

const patientsAppointmentsDataMale = [
    { day: "", appointments: 0 },
    { day: "Mon", appointments: 100 },
    { day: "Tue", appointments: 150 },
    { day: "Wed", appointments: 200 },
    { day: "Thu", appointments: 120 },
    { day: "Fri", appointments: 180 },
    { day: "Sat", appointments: 250 },
];
const patientsAppointmentsDataFemale = [
    { day: "", appointments: 0 },
    { day: "Mon", appointments: 50 },
    { day: "Tue", appointments: 170 },
    { day: "Wed", appointments: 130 },
    { day: "Thu", appointments: 80 },
    { day: "Fri", appointments: 250 },
    { day: "Sat", appointments: 150 },
];

const PatientChart = (props: Props) => {
    const data = {
        labels: patientsAppointmentsDataLabels,
        datasets: [
            {
                label: "Males",
                data: patientsAppointmentsDataMale.map(
                    (data) => data.appointments
                ),
                borderColor: "#9333ea",
                borderWidth: 3,
                pointBorderColor: "#9333ea",
                pointBorderWidth: 3,
                tension: 0.3,
                fill: false,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, "white");
                    gradient.addColorStop(1, "white");
                    return gradient;
                },
            },
            {
                label: "Females",
                data: patientsAppointmentsDataFemale.map(
                    (data) => data.appointments
                ),
                borderColor: "#16a34a",
                borderWidth: 3,
                pointBorderColor: "#16a34a",
                pointBorderWidth: 3,
                tension: 0.3,
                fill: false,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, "white");
                    gradient.addColorStop(1, "white");
                    return gradient;
                },
            },
        ],
    };
    const options = {
        plugins: {
            legend: true,
        },
        responsive: true,
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 12,
                        weight: "700",
                    },
                },
                title: {
                    display: true,
                    text: "Patients",
                    padding: {
                        bottom: 10,
                    },
                    font: {
                        size: 15,
                        family: "Verdana",
                    },
                },
                min: 0,
            },
            x: {
                ticks: {
                    font: {
                        size: 12,
                        weight: "700",
                    },
                },
                title: {
                    display: true,
                    text: "Days",
                    padding: {
                        top: 10,
                    },
                    font: {
                        size: 15,
                        family: "Verdana",
                    },
                },
            },
        },
    };
    return (
        <div className="p-4 md:w-[60%] border rounded-lg">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-black">Patients</h1>
                <div>
                    <Select>
                        <SelectTrigger className="h-full">
                            <SelectValue placeholder="This Week" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="this week">This Week</SelectItem>
                            <SelectItem value="last week">Last Week</SelectItem>
                            <SelectItem value="two weeks ago">
                                Two Weeks Ago
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full">
                {/* <Image
                    src="/patients-chart.png"
                    alt="patient-chart"
                    width={460}
                    height={222}
                    className="w-full"
                /> */}
                <div className="">
                    <Line data={data} options={options}></Line>
                </div>
            </div>
        </div>
    );
};

export default PatientChart;
