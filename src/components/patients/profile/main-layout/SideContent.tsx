"use client";
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

type Props = {
    user?: User;
};

const SideContent = ({ user }: Props) => {
    return (
        <div className="flex gap-8 flex-col self-start w-full md:w-[30%] rounded-md h-full">
            <div className="">
                <h1 className="font-semibold text-3xl">Medical Profile</h1>
                <p>You can update your medical profile details below.</p>
            </div>
            <form className="flex flex-col gap-8">
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
                                            console.log(
                                                value,
                                                "this is select value"
                                            );
                                        }}>
                                        <SelectTrigger className="w-full]">
                                            <SelectValue placeholder="Do you smoke?" />
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
                                            console.log(
                                                value,
                                                "this is select value"
                                            );
                                        }}>
                                        <SelectTrigger className="w-full]">
                                            <SelectValue placeholder="Do you drink alcohol?" />
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
                                    type="text"
                                    placeholder="Allergies"
                                    // value={user?.first_name}
                                    // required
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
                                            console.log(
                                                value,
                                                "this is select value"
                                            );
                                        }}>
                                        <SelectTrigger className="w-full]">
                                            <SelectValue placeholder="What is your blood group?" />
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
                                            console.log(
                                                value,
                                                "this is select value"
                                            );
                                        }}>
                                        <SelectTrigger className="w-full]">
                                            <SelectValue placeholder="What is your genotype?" />
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
                                        className="w-32 mr-1"
                                        min={0}
                                    />
                                    <span className="font-semibold">cm</span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="">Weight</Label>
                                <div className="flex items-center h-10 w-full rounded-md bg-background text-sm disabled:cursor-not-allowed disabled:opacity-50">
                                    <Input
                                        type="number"
                                        className="w-32 mr-1"
                                        min={0}
                                    />
                                    <span className="font-semibold">kg</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};

export default SideContent;
