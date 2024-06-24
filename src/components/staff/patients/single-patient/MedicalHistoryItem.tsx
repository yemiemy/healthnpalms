"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DeleteIcon, EditIcon, HeartPulseIcon, Trash2Icon } from "lucide-react";
import React from "react";
import MedicalHistoryDeleteForm from "./MedicalHistoryDeleteForm";
import MedicalHistoryForm from "./MedicalHistoryForm";
import { MedicalHistory, Patient } from "@/lib/models/patient/models";
import { format } from "date-fns";

type Props = {
    bgColor: string;
    addConnector?: boolean;
    patient: Patient;
    medical_history: MedicalHistory;
    setRefreshPatientData: any;
};

const MedicalHistoryItem = ({
    bgColor,
    addConnector,
    patient,
    medical_history,
    setRefreshPatientData,
}: Props) => {
    const [showOptions, setShowOptions] = React.useState<boolean>(false);
    return (
        <div
            className="flex justify-between gap-2 hover:rounded-md hover:bg-gray-50 p-2"
            onMouseEnter={(e) => {
                setShowOptions(true);
            }}
            onMouseLeave={(e) => {
                setShowOptions(false);
            }}>
            <div className="flex gap-2">
                <div>
                    <div className={"relative rounded-full p-2 " + bgColor}>
                        <HeartPulseIcon className="text-slate-600" />
                        {addConnector && (
                            <div
                                className={
                                    "absolute top-full left-[47%] w-1 h-8 " +
                                    bgColor
                                }></div>
                        )}
                    </div>
                </div>
                <div>
                    <p>{medical_history.medical_conditions}</p>
                    <p className="text-xs">
                        {format(medical_history.created_at, "E, LLL dd yyyy")}
                    </p>
                </div>
            </div>
            {showOptions && (
                <div className="flex flex-col gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <EditIcon
                                className="cursor-pointer text-gray-500"
                                width={16}
                                height={16}
                            />
                        </DialogTrigger>
                        <MedicalHistoryForm
                            patient={patient}
                            medical_history={medical_history}
                            setRefreshPatientData={setRefreshPatientData}
                        />
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Trash2Icon
                                className="cursor-pointer text-destructive"
                                width={16}
                                height={16}
                            />
                        </DialogTrigger>
                        <MedicalHistoryDeleteForm
                            medical_history={medical_history}
                            setRefreshPatientData={setRefreshPatientData}
                        />
                    </Dialog>
                </div>
            )}
        </div>
    );
};

export default MedicalHistoryItem;
