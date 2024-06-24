import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {
    handlePatientProfileUpdate: any;
    handleInputChange: any;
    doctorData: any;
};

const DoctorProfileUpdateForm = ({
    handlePatientProfileUpdate,
    handleInputChange,
    doctorData,
}: Props) => {
    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={handlePatientProfileUpdate}>
            <Card>
                <CardHeader className="">
                    <h1 className="font-semibold">Education & License</h1>
                </CardHeader>
                <CardContent className="">
                    <div className="grid gap-4">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="">
                                    Education and qualifications
                                </Label>
                                <Input
                                    type="text"
                                    id="education_and_qualifications"
                                    name="education_and_qualifications"
                                    placeholder="education and qualifications"
                                    value={
                                        doctorData.education_and_qualifications ||
                                        ""
                                    }
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="">Medical License Number</Label>
                                <Input
                                    type="text"
                                    id="medical_license_number"
                                    name="medical_license_number"
                                    placeholder="license number"
                                    value={
                                        doctorData.medical_license_number || ""
                                    }
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="">
                    <h1 className="font-semibold">Specialization</h1>
                </CardHeader>
                <CardContent className="">
                    <div className="grid gap-4">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="">Specialization</Label>
                                <Input
                                    id="specialization"
                                    name="specialization"
                                    type="text"
                                    placeholder="specialization"
                                    value={doctorData.specialization || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="">Department</Label>
                                <Input
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="department"
                                    value={doctorData.department || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="w-full -mt-4">
                <Button className="w-fit float-right">Save Changes</Button>
            </div>
        </form>
    );
};

export default DoctorProfileUpdateForm;
