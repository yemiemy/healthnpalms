import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeartPulseIcon, PlusIcon, StarIcon } from "lucide-react";
import React from "react";
import mountains from "../../../../public/mountains.avif";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import MedicalHistoryForm from "./MedicalHistoryForm";
import MedicalHistoryItem from "./MedicalHistoryItem";

type Props = {};

const SideContent = (props: Props) => {
    return (
        <div className="p-8 pl-8 md:pl-0 md:w-[30%]">
            <Card className="w-full">
                <CardContent className="p-6">
                    <p>Email: mical.doe@gmail.com</p>
                    <p>Phone: +11 123 456 7890</p>
                    <p>Address: 123, Lorem Ipsum, Lagos, Nigeria</p>
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
                        <MedicalHistoryForm />
                    </Dialog>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 pb-6 px-4 pt-0">
                    <MedicalHistoryItem
                        title="Diabetes"
                        date={new Date().toDateString()}
                        bgColor="bg-green-100"
                        addConnector
                    />
                    <MedicalHistoryItem
                        title="Fever"
                        date={new Date().toDateString()}
                        bgColor="bg-purple-100"
                        addConnector
                    />
                    <MedicalHistoryItem
                        title="Typhoid & Malaria"
                        date={new Date().toDateString()}
                        bgColor="bg-yellow-100"
                        addConnector
                    />
                    <MedicalHistoryItem
                        title="Migraine"
                        date={new Date().toDateString()}
                        bgColor="bg-blue-100"
                    />
                </CardContent>
            </Card>
            <Card className="w-full mt-4">
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
            </Card>
        </div>
    );
};

export default SideContent;
