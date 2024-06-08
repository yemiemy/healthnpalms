"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "@/lib/models/accounts/models";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, InfoIcon, LoaderIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import axios from "@/lib/api";
import { toast } from "sonner";

type Props = {
    user: User;
    token?: string;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const PHONE_REGEX =
    /^\+234\d{10}$|^070\d{7}$|^080\d{7}$|^081\d{7}$|^090\d{7}$|^091\d{7}$/;
const MainContent = ({ user, setUser, token }: Props) => {
    const [date_of_birth, setDateOfBirth] = React.useState<Date | undefined>(
        user.date_of_birth ? new Date(user.date_of_birth) : undefined
    );
    const [validPhoneNumber, setValidPhoneNumber] =
        React.useState<boolean>(false);
    const [phoneFocus, setPhoneFocus] = React.useState<boolean>(false);
    const [avatarBtnLoader, setAvatarBtnLoader] =
        React.useState<boolean>(false);
    const [updateProfileBtnLoader, setUpdateProfileBtnLoader] =
        React.useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleUpdateAvatar = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault();
        setAvatarBtnLoader(true);

        const form = new FormData();
        if (e.target.files) {
            form.append("avatar", e.target.files[0]);
            try {
                const response = await axios.put(
                    "/accounts/update-avatar/",
                    form,
                    {
                        headers: {
                            Authorization: `Token ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                const data = await response.data;
                setUser(data);
                toast.success("Avatar uploaded successfully.");
            } catch (err: any) {
                toast.error("Unable to upload your avatar.");
            } finally {
                setAvatarBtnLoader(false);
            }
        }
    };

    const handleUpdateProfile = async (e: any) => {
        e.preventDefault();
        setUpdateProfileBtnLoader(true);

        if (date_of_birth) {
            user.date_of_birth = format(date_of_birth, "y-M-d");
        }
        try {
            const response = await axios.put(
                "/accounts/details/",
                JSON.stringify(user),
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );

            const data = await response.data;
            setUser(data);
            toast.success("Profile updated successfully.");
        } catch (err: any) {
            console.log(err);
            let data = err.response.data;
            for (const key of Object.keys(data)) {
                toast.error(data[key][0]);
            }
        } finally {
            setUpdateProfileBtnLoader(false);
        }
    };

    React.useEffect(() => {
        const result = PHONE_REGEX.test(user.phone_number);
        setValidPhoneNumber(result);
    }, [user]);

    return (
        <div className="flex-1 flex flex-col gap-8 w-full">
            <div>
                <h1 className="font-semibold text-3xl">Edit Profile</h1>
                <p>You can update your profile details below.</p>
            </div>

            <Card>
                <CardContent className="flex justify-between gap-4 p-6 w-full items-center">
                    <div className="flex gap-2 items-center">
                        {user?.avatar ? (
                            <Image
                                width={70}
                                height={70}
                                src={user?.avatar ? user.avatar : ""}
                                alt="user-avatar"
                                className="rounded-full w-[80px] h-[80px] md:w-auto md:h-auto"
                                priority
                            />
                        ) : (
                            <div>
                                <div className="rounded-full w-[80px] h-[80px] bg-gray-300"></div>
                                <p>No image uploaded yet.</p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-2">
                        <Button
                            onClick={handleClick}
                            variant="outline"
                            size="sm"
                            disabled={avatarBtnLoader}>
                            {avatarBtnLoader && (
                                <LoaderIcon className="animate-spin mr-2" />
                            )}
                            {user?.avatar ? "Update" : "Upload"}
                        </Button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/x-png,image/gif,image/jpeg"
                            className="hidden"
                            onChange={handleUpdateAvatar}
                        />
                        <Button variant="destructive" size="sm">
                            Delete
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="">
                    <div className="">
                        <h1 className="font-semibold">Personal Details</h1>
                        <p className="text-sm">
                            Edit your personal information and address.
                        </p>
                    </div>
                </CardHeader>
                <CardContent className=" w-full">
                    <form className="w-full" onSubmit={handleUpdateProfile}>
                        <div className="grid gap-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first_name">
                                        First Name
                                    </Label>
                                    <Input
                                        id="first_name"
                                        name="first_name"
                                        type="text"
                                        placeholder="First Name"
                                        value={user?.first_name || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last_name">Last Name</Label>
                                    <Input
                                        id="last_name"
                                        name="last_name"
                                        type="text"
                                        placeholder="Last Name"
                                        value={user?.last_name || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="phone_number">Phone</Label>
                                    <Input
                                        id="phone_number"
                                        name="phone_number"
                                        type="text"
                                        placeholder="+234123456789"
                                        value={user?.phone_number || ""}
                                        className={cn("mb-2", {
                                            "focus-visible:ring-red-600":
                                                !validPhoneNumber &&
                                                user.phone_number?.length > 0,
                                        })}
                                        aria-invalid={
                                            validPhoneNumber ? "false" : "true"
                                        }
                                        aria-describedby="phonenote"
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={() => setPhoneFocus(false)}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <p
                                        id="pwdnote"
                                        className={
                                            phoneFocus && !validPhoneNumber
                                                ? "relative text-xs items-center flex gap-2 bg-green-100 p-2 rounded-md mb-2"
                                                : "hidden"
                                        }>
                                        <span>
                                            <InfoIcon width={12} height={12} />
                                        </span>
                                        <span>
                                            Phone number must start with one of{" "}
                                            <b>+234</b>, <b>070</b>, <b>080</b>,{" "}
                                            <b>081</b>, <b>090</b> and{" "}
                                            <b>091</b>.
                                            <br />
                                            Must not be longer than 13 if{" "}
                                            <b>+234</b> else, must not be longer
                                            than 11.
                                        </span>
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="date_of_birth">
                                        Date of birth
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal",
                                                    !date_of_birth &&
                                                        "text-muted-foreground"
                                                )}>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date_of_birth ? (
                                                    format(date_of_birth, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date_of_birth}
                                                onSelect={setDateOfBirth}
                                                fromYear={1900}
                                                toYear={new Date().getFullYear()}
                                                captionLayout="dropdown-buttons"
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="address_1">
                                        Address Line 1
                                    </Label>
                                    <Input
                                        id="address_1"
                                        name="address_1"
                                        type="text"
                                        placeholder="Address Line 1"
                                        value={user?.address_1 || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="address_2">
                                        Address Line 2
                                    </Label>
                                    <Input
                                        id="address_2"
                                        name="address_2"
                                        type="text"
                                        placeholder="Address Line 2 (Optional)"
                                        value={user?.address_2 || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input
                                        id="state"
                                        name="state"
                                        type="text"
                                        placeholder="State"
                                        value={user?.state || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input
                                        id="country"
                                        name="country"
                                        type="text"
                                        placeholder="Country"
                                        value={user?.country || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-fit"
                                disabled={
                                    updateProfileBtnLoader || !validPhoneNumber
                                }>
                                {updateProfileBtnLoader && (
                                    <LoaderIcon className="animate-spin mr-2" />
                                )}
                                Update Profile
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default MainContent;
