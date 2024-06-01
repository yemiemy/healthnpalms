"use client";
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
import { User } from "@/lib/models/accounts/models";
import React from "react";
import axios from "@/lib/api";
import { toast } from "sonner";
import { Patient } from "@/lib/models/patient/models";
import { Textarea } from "@/components/ui/textarea";

type Props = {
    user?: User;
    token?: string;
};

const SideContent = ({ user, token }: Props) => {
    const [patientData, setPatientData] = React.useState<Patient>();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        // @ts-ignore
        setPatientData({ ...patientData, [name]: value });
    };
    const handlePatientProfileUpdate = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                "/accounts/patient/",
                patientData,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            const data = response.data;
            setPatientData(data);
            toast.success("Medical profile updated successfully.");
        } catch (err: any) {
            console.log("Error:", err);
            toast.error("An error occurred updating your medical profile.");
        }
    };

    const getPatientData = React.useCallback(async () => {
        try {
            const response = await axios.get("/accounts/patient/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = response.data;
            setPatientData(data);
        } catch (err: any) {
            console.log("Error:", err);
            toast.error("An error occurred getting patient data.");
        }
    }, [token]);

    React.useEffect(() => {
        getPatientData();
    }, [getPatientData]);
    if (!patientData) {
        return (
            <div className="flex gap-8 flex-col self-start w-full md:w-[30%] rounded-md h-full">
                No patient data.
            </div>
        );
    }
    return (
        <div className="flex gap-8 flex-col self-start w-full md:w-[30%] rounded-md h-full">
            <div className="">
                <h1 className="font-semibold text-3xl">Medical Profile</h1>
                <p>You can update your medical profile details below.</p>
            </div>
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
                                                <SelectLabel>
                                                    Choose
                                                </SelectLabel>
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
                                    <Label htmlFor="">
                                        Alcohol consumption
                                    </Label>
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
                                                <SelectLabel>
                                                    Choose
                                                </SelectLabel>
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
                                                <SelectItem value="A">
                                                    A
                                                </SelectItem>
                                                <SelectItem value="B">
                                                    B
                                                </SelectItem>
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
                                                <SelectLabel>
                                                    Genotype
                                                </SelectLabel>
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
                            {/* <Label htmlFor="">Height</Label> */}
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
        </div>
    );
};

export default SideContent;
