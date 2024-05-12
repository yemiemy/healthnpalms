"use client";
import React from "react";
import PatientChart from "./PatientChart";
import GenderPieChart from "./GenderPieChart";

type Props = {};

const InfoChart = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 pb-8">
            <PatientChart />
            <GenderPieChart />
        </div>
    );
};

export default InfoChart;
