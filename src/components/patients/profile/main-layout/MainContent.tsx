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
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
    user?: User;
};

const MainContent = ({ user }: Props) => {
    const [date, setDate] = React.useState<Date>();
    return (
        <div className="flex-1 flex flex-col gap-8 w-full">
            <div>
                <h1 className="font-semibold text-3xl">Edit Profile</h1>
                <p>You can update your profile details below.</p>
            </div>

            <Card>
                <CardContent className="flex justify-between gap-4 p-6 w-full items-center">
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

                    <div className="flex flex-col md:flex-row gap-2">
                        <Button variant="outline" size="sm">
                            Update
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-500 hover:border-red-400 hover:text-white">
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
                    <form className="w-full">
                        <div className="grid gap-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first_name">
                                        First Name
                                    </Label>
                                    <Input
                                        id="first_name"
                                        type="text"
                                        placeholder="First Name"
                                        value={user?.first_name}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last_name">Last Name</Label>
                                    <Input
                                        id="last_name"
                                        type="text"
                                        placeholder="Last Name"
                                        value={user?.last_name}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="phone_number">Phone</Label>
                                    <Input
                                        id="phone_number"
                                        type="text"
                                        placeholder="+234123456789"
                                        value={user?.phone_number}
                                        required
                                    />
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
                                                    !date &&
                                                        "text-muted-foreground"
                                                )}>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? (
                                                    format(date, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
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
                                        type="text"
                                        placeholder="Address Line 1"
                                        value={user?.address_1}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="address_2">
                                        Address Line 2
                                    </Label>
                                    <Input
                                        id="address_2"
                                        type="text"
                                        placeholder="Address Line 2 (Optional)"
                                        value={user?.address_2}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input
                                        id="state"
                                        type="text"
                                        placeholder="State"
                                        value={user?.state}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input
                                        id="country"
                                        type="text"
                                        placeholder="Country"
                                        value={user?.state}
                                        required
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-fit">
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
