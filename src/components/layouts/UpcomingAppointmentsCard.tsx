"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Appointment2 from "../staff/dashboard/main-layout/side-content/Appointment2";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, MoveRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "@/lib/api";
import Cookies from "js-cookie";
import { Appointment } from "@/lib/models/shared/models";
import { toast } from "sonner";
import { format } from "date-fns";

type Props = {
    isPatient?: boolean;
};

const bgColors: string[] = [
    "bg-blue-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-green-100",
];
const UpcomingAppointmentsCard = ({ isPatient }: Props) => {
    const router = useRouter();
    const token = Cookies.get("__token");
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const getAppointmentsData = useCallback(async () => {
        try {
            const url = isPatient ? "/appointments/" : "/appointments/staff/";
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            const results = data.results
                .filter((appointment: Appointment) =>
                    ["Pending", "Accepted"].includes(appointment.status)
                )
                .slice(0, 5);
            setAppointments(results);
        } catch (err: any) {
            console.log("Error getting user:", err);
            toast.error("Unable to fetch your appointments. Please try again.");
        }
    }, [token, isPatient]);

    useEffect(() => {
        getAppointmentsData();
    }, [getAppointmentsData]);

    return (
        <div className="w-full">
            {appointments.length > 0 ? (
                <>
                    {appointments.map((appointment, index) => (
                        <Appointment2
                            key={appointment.id}
                            name={
                                isPatient
                                    ? appointment.medical_professional.user
                                          .full_name
                                    : appointment.patient.user.full_name
                            }
                            avatar={
                                isPatient
                                    ? appointment.medical_professional.user
                                          .avatar
                                    : appointment.patient.user.avatar
                            }
                            bgColor={bgColors[index % bgColors.length]}
                            timeSlot={format(appointment.start_time, "PPPp")}
                            url={
                                isPatient
                                    ? ""
                                    : `/staff/appointments/${appointment.id}`
                            }
                        />
                    ))}

                    <Button
                        className="w-full bg-slate-200 text-purple-500"
                        variant="secondary"
                        onClick={() =>
                            router.push(
                                isPatient
                                    ? "/appointments"
                                    : "/staff/appointments"
                            )
                        }>
                        View All Appointments{" "}
                        <MoveRightIcon
                            className="ml-1"
                            width={15}
                            height={15}
                        />
                    </Button>
                </>
            ) : (
                <div className="">No upcoming appointments.</div>
            )}
        </div>
    );
};

export default UpcomingAppointmentsCard;
