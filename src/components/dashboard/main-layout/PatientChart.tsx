"use client";
import Image from "next/image";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {};

const PatientChart = (props: Props) => {
    return (
        <div className="p-4 w-full border rounded-lg">
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
                <Image
                    src="/patients-chart.png"
                    alt="patient-chart"
                    width={460}
                    height={222}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default PatientChart;
