"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MedicalHistory } from "@/lib/models/patient/models";
import Cookies from "js-cookie";
import { toast } from "sonner";
import axios from "@/lib/api";
import { useRouter } from "next/navigation";

type Props = {
    medical_history: MedicalHistory;
    setRefreshPatientData: any;
};

const MedicalHistoryDeleteForm = ({
    medical_history,
    setRefreshPatientData,
}: Props) => {
    const router = useRouter();
    const token = Cookies.get("__token");
    const [isClient, setIsClient] = useState(false);
    const dialogClose = useRef<HTMLButtonElement>(null);

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

    const handleDelete = async (e: any) => {
        e.preventDefault();
        try {
            await axios.delete("/accounts/staff/patient/medical-history/", {
                params: { medical_history_id: medical_history.id },
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            dialogClose.current?.click();
            toast.success("Medical history deleted successfully.");
            setRefreshPatientData((prev: any) => !prev);
        } catch (err: any) {
            console.log("Error", err);
            toast.error("Unable to process your request. Please try again.");
        }
    };
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Delete Medical History</DialogTitle>
                <DialogDescription>
                    Are you sure you want to delete this history?
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid items-center gap-4">
                    <Label htmlFor="name" className="">
                        Medical condition
                    </Label>
                    <p>{medical_history?.medical_conditions}</p>
                </div>
                <div className="grid items-center gap-4">
                    <Label htmlFor="name" className="">
                        Medications
                    </Label>
                    <p>{medical_history?.medications}</p>
                </div>
            </div>
            <DialogFooter>
                <DialogClose className="bg-secondary hover:bg-secondary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium px-4 py-2">
                    Cancel
                </DialogClose>
                <Button
                    type="submit"
                    variant="destructive"
                    onClick={handleDelete}>
                    Delete
                </Button>
            </DialogFooter>
            <DialogClose className="hidden" ref={dialogClose}></DialogClose>
        </DialogContent>
    );
};

export default MedicalHistoryDeleteForm;
