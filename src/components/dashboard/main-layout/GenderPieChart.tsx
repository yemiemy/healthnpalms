import Image from "next/image";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {};

const GenderPieChart = (props: Props) => {
    return (
        <div className="p-4 w-full border rounded-lg">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-black">Gender</h1>
                <div>
                    <Select>
                        <SelectTrigger className="h-full">
                            <SelectValue placeholder="2024" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full">
                <Image
                    src="/patients-pie.png"
                    alt="patient-chart"
                    width={329}
                    height={223}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default GenderPieChart;
