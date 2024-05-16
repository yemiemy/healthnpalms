import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {};

const MedicalHistoryEditForm = (props: Props) => {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Update Medical History for Mical Doe</DialogTitle>
                <DialogDescription>
                    Update patient&apos;s medical history here. Click save when
                    you&apos;re done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Username
                    </Label>
                    <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose className="bg-secondary hover:bg-secondary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium px-4 py-2">
                    Cancel
                </DialogClose>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
        </DialogContent>
    );
};

export default MedicalHistoryEditForm;
