import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {
    handlePatientProfileUpdate: any;
    handleInputChange: any;
    patientData: any;
};

const PatientProfileUpdateForm = ({
    handlePatientProfileUpdate,
    handleInputChange,
    patientData,
}: Props) => {
    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={handlePatientProfileUpdate}>
            <Card>
                <CardHeader className="">
                    <h1 className="font-semibold">Health and Habits</h1>
                </CardHeader>
                <CardContent className="">
                    <div className="grid gap-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="">Smoking status</Label>
                                <Select
                                    onValueChange={(value) => {
                                        handleInputChange({
                                            target: {
                                                name: "smoking_status",
                                                value,
                                            },
                                        });
                                    }}>
                                    <SelectTrigger className="w-full]">
                                        <SelectValue
                                            placeholder={
                                                patientData.smoking_status ===
                                                "Y"
                                                    ? "Yes"
                                                    : patientData.smoking_status ===
                                                      "N"
                                                    ? "No"
                                                    : "Do you smoke?"
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Choose</SelectLabel>
                                            <SelectItem value="Y">
                                                Yes
                                            </SelectItem>
                                            <SelectItem value="N">
                                                No
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="">Alcohol consumption</Label>
                                <Select
                                    onValueChange={(value) => {
                                        handleInputChange({
                                            target: {
                                                name: "alcohol_consumption",
                                                value,
                                            },
                                        });
                                    }}>
                                    <SelectTrigger className="w-full]">
                                        <SelectValue
                                            placeholder={
                                                patientData.alcohol_consumption ===
                                                "Y"
                                                    ? "Yes"
                                                    : patientData.alcohol_consumption ===
                                                      "N"
                                                    ? "No"
                                                    : "Do you drink alcohol?"
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Choose</SelectLabel>
                                            <SelectItem value="Y">
                                                Yes
                                            </SelectItem>
                                            <SelectItem value="N">
                                                No
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="allergies">Allergies</Label>
                            <Input
                                id="allergies"
                                name="allergies"
                                type="text"
                                placeholder="Allergies"
                                value={patientData.allergies || ""}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="">
                    <h1 className="font-semibold">Blood</h1>
                </CardHeader>
                <CardContent className="">
                    <div className="grid gap-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="">Blood group</Label>
                                <Select
                                    onValueChange={(value) => {
                                        handleInputChange({
                                            target: {
                                                name: "blood_group",
                                                value,
                                            },
                                        });
                                    }}>
                                    <SelectTrigger className="w-full]">
                                        <SelectValue
                                            placeholder={
                                                patientData.blood_group ||
                                                "What is your blood group?"
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Blood group
                                            </SelectLabel>
                                            <SelectItem value="A">A</SelectItem>
                                            <SelectItem value="B">B</SelectItem>
                                            <SelectItem value="AB">
                                                AB
                                            </SelectItem>
                                            <SelectItem value="O+">
                                                O Positive
                                            </SelectItem>
                                            <SelectItem value="O-">
                                                O Negative
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="">Genotype</Label>
                                <Select
                                    onValueChange={(value) => {
                                        handleInputChange({
                                            target: {
                                                name: "genotype",
                                                value,
                                            },
                                        });
                                    }}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue
                                            placeholder={
                                                patientData.genotype ||
                                                "What is your genotype?"
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Genotype</SelectLabel>
                                            <SelectItem value="AA">
                                                AA
                                            </SelectItem>
                                            <SelectItem value="AB">
                                                AB
                                            </SelectItem>
                                            <SelectItem value="AO">
                                                AO
                                            </SelectItem>
                                            <SelectItem value="BO">
                                                BO
                                            </SelectItem>
                                            <SelectItem value="OO">
                                                OO
                                            </SelectItem>
                                            <SelectItem value="SS">
                                                SS
                                            </SelectItem>
                                            <SelectItem value="AS">
                                                AS
                                            </SelectItem>
                                            <SelectItem value="SC">
                                                SC
                                            </SelectItem>
                                            <SelectItem value="CC">
                                                CC
                                            </SelectItem>
                                            <SelectItem value="AC">
                                                AC
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="">
                    <div>
                        <h1>Body Measurements</h1>
                    </div>
                </CardHeader>
                <CardContent className="">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="">Height</Label>
                            <div className="flex items-center h-10 w-full rounded-md bg-background text-sm disabled:cursor-not-allowed disabled:opacity-50">
                                <Input
                                    type="number"
                                    name="height"
                                    className="w-32 mr-1"
                                    min={0}
                                    value={patientData.height || 0}
                                    onChange={handleInputChange}
                                />
                                <span className="font-semibold">cm</span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="">Weight</Label>
                            <div className="flex items-center h-10 w-full rounded-md bg-background text-sm disabled:cursor-not-allowed disabled:opacity-50">
                                <Input
                                    type="number"
                                    name="weight"
                                    className="w-32 mr-1"
                                    min={0}
                                    value={patientData.weight || 0}
                                    onChange={handleInputChange}
                                />
                                <span className="font-semibold">kg</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="">
                    <div>
                        <h1>Emergency Contact Details</h1>
                    </div>
                </CardHeader>
                <CardContent className="">
                    <div className="grid gap-4">
                        <Textarea
                            name="emergency_contact"
                            className="w-full border rounded-md"
                            rows={5}
                            value={
                                patientData.emergency_contact ||
                                `Full Name:
Phone Number:
Email Address:
Home Address:
                                `
                            }
                            onChange={handleInputChange}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="w-full -mt-4">
                <Button className="w-fit float-right">Save Changes</Button>
            </div>
        </form>
    );
};

export default PatientProfileUpdateForm;
