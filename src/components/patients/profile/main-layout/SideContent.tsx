"use client";

import { User } from "@/lib/models/accounts/models";
import React from "react";
import axios from "@/lib/api";
import { toast } from "sonner";
import PatientProfileUpdateForm from "./PatientProfileUpdateForm";
import DoctorProfileUpdateForm from "./DoctorProfileUpdateForm";

type Props = {
    user?: User;
    token?: string;
};

const SideContent = ({ user, token }: Props) => {
    const [profileData, setProfileData] = React.useState();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        // @ts-ignore
        setProfileData({ ...profileData, [name]: value });
    };
    const handleProfileUpdate = async (e: any) => {
        e.preventDefault();
        try {
            //@ts-ignore
            const response = await axios.put(
                `/accounts/${
                    user?.is_medical_professional ? "staff/" : "patient/"
                }`,
                //@ts-ignore
                profileData,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            //@ts-ignore
            const data = response.data;
            setProfileData(data);
            toast.success("Medical profile updated successfully.");
        } catch (err: any) {
            console.log("Error:", err);
            toast.error("An error occurred updating your medical profile.");
        }
    };

    const getData = React.useCallback(async () => {
        try {
            const response = await axios.get(
                `/accounts/${
                    user?.is_medical_professional ? "staff/" : "patient/"
                }`,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            const data = response.data;
            setProfileData(data);
        } catch (err: any) {
            console.log("Error:", err);
            toast.error("An error occurred getting patient data.");
        }
    }, [token, user]);

    React.useEffect(() => {
        getData();
    }, [getData]);
    if (!profileData) {
        return (
            <div className="flex gap-8 flex-col self-start w-full md:w-[30%] rounded-md h-full">
                No data.
            </div>
        );
    }
    return (
        <div className="flex gap-8 flex-col self-start w-full md:w-[30%] rounded-md h-full">
            <div className="">
                <h1 className="font-semibold text-3xl">Medical Profile</h1>
                <p>You can update your medical profile details below.</p>
            </div>
            {user?.is_medical_professional ? (
                <DoctorProfileUpdateForm
                    handlePatientProfileUpdate={handleProfileUpdate}
                    handleInputChange={handleInputChange}
                    doctorData={profileData}
                />
            ) : (
                <PatientProfileUpdateForm
                    handlePatientProfileUpdate={handleProfileUpdate}
                    handleInputChange={handleInputChange}
                    patientData={profileData}
                />
            )}
        </div>
    );
};

export default SideContent;
