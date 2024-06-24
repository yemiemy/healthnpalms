"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    ActivitySquareIcon,
    DnaIcon,
    Ruler,
    SyringeIcon,
    WeightIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import mountains from "../../../../../public/mountains.avif";
import { Patient } from "@/lib/models/patient/models";
import { format } from "date-fns";

type Props = {
    patient: Patient;
};

const MainContent = ({ patient }: Props) => {
    return (
        <div className="w-full md:w-[70%] flex flex-col gap-4 p-8">
            <Card className="w-full">
                <CardHeader className="p-0">
                    <div className="w-full relative h-40">
                        <Image
                            alt="Mountains"
                            src={mountains}
                            placeholder="blur"
                            quality={100}
                            fill
                            sizes="100vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                </CardHeader>
                <CardContent className="pt-4 relative">
                    <div className="flex gap-4">
                        <div className="-mt-14">
                            <Image
                                alt="patient_picture"
                                src={patient.user.avatar || mountains}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsfvirHgAG7ALPXD0XhQAAAABJRU5ErkJggg=="
                                quality={100}
                                className="rounded-md w-28 h-28 bg-white border"
                                width={112}
                                height={112}
                            />
                        </div>

                        <div>
                            <h1 className="text-xl font-extrabold">
                                {patient.user.full_name}
                            </h1>
                            <h2 className="font-bold"># {patient.id}</h2>
                            <h2 className="font-normal">
                                Joined:{" "}
                                {format(patient.user.date_joined, "PPPPppp")}
                            </h2>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full">
                <CardHeader className="border-b">
                    <div className="w-full">
                        <h1 className="font-bold">Current Details:</h1>
                    </div>
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-row justify-between border-b py-4">
                        <div>
                            <p className="text-gray-500">Patient Name:</p>
                            <p className="font-semibold">
                                {patient.user.full_name}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500">Patient ID:</p>
                            <p className="font-semibold">{patient.id}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col justify-center items-center py-6">
                            <WeightIcon strokeWidth={1} />
                            <small>Weight</small>
                            <p className="font-semibold">{patient.weight} kg</p>
                        </div>

                        <div className="flex flex-col justify-center items-center py-6 border-l">
                            <Ruler strokeWidth={1} />
                            <small>Height</small>
                            <p className="font-semibold">{patient.height} cm</p>
                        </div>
                        <div className="flex flex-col justify-center items-center py-6 border-l">
                            <ActivitySquareIcon strokeWidth={1} />
                            <small>BMI</small>
                            <p className="font-semibold">{patient.bmi}</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between border-y py-4">
                        <div>
                            <p className="text-gray-500">Smoking status:</p>
                            <p className="font-semibold">
                                {patient.smoking_status}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500">
                                Alcohol consumption:
                            </p>
                            <p className="font-semibold">
                                {patient.alcohol_consumption}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center items-center py-6">
                            <SyringeIcon strokeWidth={1} />
                            <small>Blood Group</small>
                            <p className="font-semibold">
                                {patient.blood_group}
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center py-6 border-l">
                            <DnaIcon strokeWidth={1} />
                            <small>Genotype</small>
                            <p className="font-semibold">{patient.genotype}</p>
                        </div>
                    </div>
                    <div className="border-t py-4">
                        <div>
                            <p className="text-gray-500">Emergency contact:</p>
                            <p className="">{patient.emergency_contact}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MainContent;
