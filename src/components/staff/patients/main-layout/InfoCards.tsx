import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { UsersIcon } from "lucide-react";

type Props = {};

const InfoCards = (props: Props) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="uppercase">
                        All Patients
                    </CardDescription>
                    <div className="text-4xl font-extrabold flex justify-between items-center">
                        <h1 className="">350</h1>
                        <div className="rounded-sm bg-purple-100 p-3">
                            <UsersIcon />
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="uppercase">
                        Male
                    </CardDescription>
                    <div className="text-4xl font-extrabold flex justify-between items-center">
                        <h1 className="">200</h1>
                        <div className="rounded-sm bg-green-100 p-3">
                            <UsersIcon />
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="uppercase">
                        Female
                    </CardDescription>
                    <div className="text-4xl font-extrabold flex justify-between items-center">
                        <h1 className="">150</h1>
                        <div className="rounded-sm bg-blue-100 p-3">
                            <UsersIcon />
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};

export default InfoCards;
