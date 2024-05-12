"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { EditIcon, HeartPulseIcon } from "lucide-react";
import React from "react";
import MedicalHistoryEditForm from "./MedicalHistoryEditForm";

type Props = {
    title: string;
    date: string;
    bgColor: string;
    addConnector?: boolean;
};

const MedicalHistoryItem = ({ title, date, bgColor, addConnector }: Props) => {
    const [showOptions, setShowOptions] = React.useState<boolean>(false);
    return (
        <div
            className="flex justify-between gap-2 hover:rounded-md hover:bg-gray-50 p-2"
            onMouseEnter={(e) => {
                setShowOptions(true);
            }}
            onMouseLeave={(e) => {
                setShowOptions(false);
            }}
            key={Math.random()}>
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
                    <p>{title}</p>
                    <p>{date}</p>
                </div>
            </div>
            {showOptions && (
                <Dialog>
                    <DialogTrigger asChild>
                        <EditIcon
                            className="cursor-pointer text-gray-500"
                            width={16}
                            height={16}
                        />
                    </DialogTrigger>
                    <MedicalHistoryEditForm />
                </Dialog>
            )}
        </div>
    );
};

export default MedicalHistoryItem;
