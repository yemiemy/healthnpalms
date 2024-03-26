"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

type Props = {};

const CalendarCard = (props: Props) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="mb-8 bg-white border rounded-lg text-slate-800 dark:bg-slate-800 dark:text-slate-100">
            <div className="border-b p-4"> Your Appointments</div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-full p-4 items-center justify-center flex"
            />
        </div>
    );
};

export default CalendarCard;
