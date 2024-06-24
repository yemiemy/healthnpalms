"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MedicalHistory, Patient } from "@/lib/models/patient/models";
import { Textarea } from "@/components/ui/textarea";
import Cookies from "js-cookie";
import { toast } from "sonner";
import axios from "@/lib/api";
import { useRouter } from "next/navigation";

type Props = {
    patient: Patient;
    medical_history?: MedicalHistory;
    setRefreshPatientData: any;
};

const MedicalHistoryForm = ({
    patient,
    medical_history,
    setRefreshPatientData,
}: Props) => {
    const router = useRouter();
    const token = Cookies.get("__token");
    const [isClient, setIsClient] = useState(false);
    const dialogClose = useRef<HTMLButtonElement>(null);

    const [formData, setFormData] = useState({
        medical_conditions: medical_history?.medical_conditions || "",
        medications: medical_history?.medications || "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        // This code runs only on the client
        setIsClient(true);
    }, []);

    if (!token || token.length == 0) {
        if (isClient) {
            toast.error("Please login to continue.");
            router.replace("/account/login?next=/staff/patients/");
        }
        return <></>;
    }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (medical_history) {
                await axios.put(
                    "/accounts/staff/patient/medical-history/",
                    JSON.stringify(formData),
                    {
                        params: { medical_history_id: medical_history.id },
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    }
                );
            } else {
                await axios.post(
                    "/accounts/staff/patient/medical-history/",
                    JSON.stringify(formData),
                    {
                        params: { patient_id: patient.id },
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    }
                );
            }
            dialogClose.current?.click();
            toast.success("Medical history updated successfully.");
            setRefreshPatientData((prev: any) => !prev);
        } catch (err: any) {
            console.log("Error", err);
            toast.error("Unable to process your request. Please try again.");
        }
    };

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>
                    Medical History for {patient?.user.full_name}
                </DialogTitle>
                <DialogDescription>
                    Update patient&apos;s medical history here. Click save when
                    you&apos;re done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid items-center gap-4">
                    <Label htmlFor="medical_conditions" className="">
                        Medical condition
                    </Label>
                    <Input
                        id="medical_conditions"
                        name="medical_conditions"
                        type="text"
                        value={formData.medical_conditions}
                        onChange={handleChange}
                    />
                </div>
                <div className="grid items-center gap-4">
                    <Label htmlFor="medications" className="">
                        Medications
                    </Label>
                    <Textarea
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <DialogFooter>
                <Button type="button" onClick={handleFormSubmit}>
                    Save changes
                </Button>
                <DialogClose className="hidden" ref={dialogClose}></DialogClose>
            </DialogFooter>
        </DialogContent>
    );
};

export default MedicalHistoryForm;
