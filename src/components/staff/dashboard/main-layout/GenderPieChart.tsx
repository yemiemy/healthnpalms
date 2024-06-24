import Image from "next/image";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Doughnut } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
    Filler,
} from "chart.js";

ChartJS.register(
    ArcElement,
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

const GenderPieChart = (props: Props) => {
    const data = {
        labels: ["Males", "Females"],
        datasets: [
            {
                data: [500, 300],
                borderColor: ["#c084fc", "#34d399"],
                borderWidth: 3,
                backgroundColor: ["#c084fc", "#34d399"],
                hoverBackgroundColor: ["#9333ea", "#059669"],
                hoverBorderColor: ["#9333ea", "#059669"],
            },
        ],
    };
    const options = {
        responsive: true,
    };
    return (
        <div className="p-4 md:w-[40%] border rounded-lg">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-black">Gender</h1>
                <div>
                    <Select>
                        <SelectTrigger className="h-full">
                            <SelectValue placeholder="2024" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default GenderPieChart;
