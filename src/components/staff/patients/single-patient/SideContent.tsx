"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import MedicalHistoryForm from "./MedicalHistoryForm";
import MedicalHistoryItem from "./MedicalHistoryItem";
import { Patient } from "@/lib/models/patient/models";
import axios from "@/lib/api";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
    intialPatient: Patient;
};

const bgColors = [
    "bg-green-100",
    "bg-purple-100",
    "bg-yellow-100",
    "bg-blue-100",
];

const SideContent = ({ intialPatient }: Props) => {
    const token = Cookies.get("__token");
    const [patient, setPatient] = React.useState<Patient>(intialPatient);
    const [isClient, setIsClient] = React.useState(false);
    const router = useRouter();

    const [refreshPatientData, setRefreshPatientData] =
        React.useState<boolean>(false);

    const getPatient = React.useCallback(async () => {
        try {
            const response = await axios.get("/accounts/staff/patient/", {
                params: {
                    patient_id: intialPatient.id,
                },
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setPatient(data);
        } catch (err: any) {
            console.log("Error", err);
        }
    }, [intialPatient, token]);

    React.useEffect(() => {
        // This code runs only on the client
        setIsClient(true);
    }, []);

    React.useEffect(() => {
        getPatient();
    }, [getPatient, refreshPatientData]);

    if (!token || token.length == 0) {
        if (isClient) {
            toast.error("Please login to continue.");
            router.replace("/account/login?next=/staff/patients/");
        }
        return <></>;
    }
    return (
        isClient && (
            <div className="p-8 pl-8 md:pl-0 md:w-[30%]">
                <Card className="w-full">
                    <CardContent className="p-6 grid gap-2">
                        <p>
                            <strong>Email:</strong> {patient?.user.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {patient?.user.phone_number}
                        </p>
                        <p>
                            <strong>Address:</strong>{" "}
                            {patient?.user.full_address}
                        </p>
                    </CardContent>
                </Card>
                <Card className="w-full mt-4">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 font-semibold">
                        <div>Medical History</div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="sm">
                                    <PlusIcon
                                        width={16}
                                        height={16}
                                        className="mr-1"
                                    />{" "}
                                    Add
                                </Button>
                            </DialogTrigger>
                            <MedicalHistoryForm
                                patient={patient}
                                setRefreshPatientData={setRefreshPatientData}
                            />
                        </Dialog>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 pb-6 px-4 pt-0">
                        {patient.medical_history.length > 0 ? (
                            patient.medical_history
                                .slice(0, 5)
                                .map((medical_history, index) => (
                                    <MedicalHistoryItem
                                        key={medical_history.id}
                                        medical_history={medical_history}
                                        patient={patient}
                                        bgColor={
                                            bgColors[index % bgColors.length]
                                        }
                                        addConnector={
                                            index + 1 !==
                                            Math.min(
                                                patient.medical_history.length,
                                                5
                                            )
                                        }
                                        setRefreshPatientData={
                                            setRefreshPatientData
                                        }
                                    />
                                ))
                        ) : (
                            <></>
                        )}
                    </CardContent>
                </Card>
                {/* <Card className="w-full mt-4">
                        <CardHeader className="font-semibold border-b">
                            Assigned Doctor
                        </CardHeader>
                        <CardContent className="flex gap-4 p-6">
                            <Image
                                alt="Mountains"
                                src={mountains}
                                placeholder="blur"
                                quality={100}
                                className="object-cover rounded-md w-20 h-20"
                            />
                            <div>
                                <h1 className="font-semibold text-xl">
                                    Dr. Ebuka Imohen
                                </h1>
                                <p className="text-gray-500">Physician</p>
                                <div className="flex gap-1">
                                    <StarIcon
                                        className=""
                                        fill="gold"
                                        strokeWidth={1}
                                        color="gold"
                                        width={14}
                                        height={14}
                                    />
                                    <StarIcon
                                        className=""
                                        fill="gold"
                                        strokeWidth={1}
                                        color="gold"
                                        width={14}
                                        height={14}
                                    />
                                    <StarIcon
                                        className=""
                                        fill="gold"
                                        strokeWidth={1}
                                        color="gold"
                                        width={14}
                                        height={14}
                                    />
                                    <StarIcon
                                        className=""
                                        fill="gold"
                                        strokeWidth={1}
                                        color="gold"
                                        width={14}
                                        height={14}
                                    />
                                    <StarIcon
                                        className=""
                                        fill="white"
                                        strokeWidth={1}
                                        color="black"
                                        width={14}
                                        height={14}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card> */}
            </div>
        )
    );
};

export default SideContent;
