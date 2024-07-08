import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VisitHistory } from "@/lib/models/patient/models";
import React, { useCallback, useEffect, useState } from "react";
import axios from "@/lib/api";
import { Appointment } from "@/lib/models/shared/models";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
    appointment: Appointment;
    token: string;
};

const MainLayout = ({ appointment, token }: Props) => {
    const [visit_history, setVisitHistory] = useState<VisitHistory>();

    const getVisitHistory = useCallback(async () => {
        try {
            const response = await axios.get(
                `/appointments/staff/visit-history/`,
                {
                    params: {
                        appointment_id: appointment.id,
                    },
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            const data = await response.data;
            setVisitHistory(data);
        } catch (err: any) {
            console.log("Error", err);
        }
    }, [appointment, token]);

    useEffect(() => {
        getVisitHistory();
    }, [getVisitHistory]);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        // @ts-ignore
        setVisitHistory({ ...visit_history, [name]: value });
    };

    const handleUpdateVisitHistory = async () => {
        try {
            const response = await axios.put(
                `/appointments/staff/visit-history/`,
                JSON.stringify(visit_history!),
                {
                    params: {
                        appointment_id: appointment.id,
                    },
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            const data = await response.data;
            setVisitHistory(data);
            toast.success("Visit history updated successfully.");
        } catch (err: any) {
            console.log("Error", err);
            toast.error("Unable to update visit history.");
        }
    };

    return (
        <div className="p-8 grid gap-8">
            <Card>
                <CardTitle className="p-6 border-b mb-6">
                    Appointment for {appointment.patient.user.full_name}
                </CardTitle>
                <CardContent>
                    <div className="flex gap-3">
                        <p>Date:</p>
                        <p>{format(appointment.start_time, "PPPppp")}</p>
                    </div>
                    <div className="flex gap-3">
                        <p>Status:</p>
                        <p>{appointment.status}</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardTitle className="p-6 text-xl">
                    Update Visit History
                </CardTitle>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label className="font-medium">Reason for visit</Label>
                        <Textarea
                            name="reason_for_visit"
                            value={visit_history?.reason_for_visit || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label className="font-medium">
                            Treatments received
                        </Label>
                        <Textarea
                            name="treatments_received"
                            value={visit_history?.treatments_received || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label className="font-medium">Notes</Label>
                        <Textarea
                            name="physician_notes"
                            value={visit_history?.physician_notes || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 justify-end">
                    <Button onClick={handleUpdateVisitHistory}>Save</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MainLayout;
