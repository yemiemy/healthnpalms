import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
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
import React from "react";
import { cn, exampleDates } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { isSameDay } from "date-fns";

type Props = {};

const defaultTimeSlots = [
    {
        slot: "09:00",
        isSelected: false,
    },
    {
        slot: "09:30",
        isSelected: false,
    },
    {
        slot: "10:00",
        isSelected: false,
    },
    {
        slot: "10:30",
        isSelected: false,
    },
    {
        slot: "11:00",
        isSelected: false,
    },
    {
        slot: "11:30",
        isSelected: false,
    },
    {
        slot: "14:00",
        isSelected: false,
    },
    {
        slot: "14:30",
        isSelected: false,
    },
    {
        slot: "15:00",
        isSelected: false,
    },
    {
        slot: "15:30",
        isSelected: false,
    },
    {
        slot: "16:00",
        isSelected: false,
    },
    {
        slot: "16:30",
        isSelected: false,
    },
    {
        slot: "17:00",
        isSelected: false,
    },
    {
        slot: "17:30",
        isSelected: false,
    },
];

const AppointmentScheduleModal = (props: Props) => {
    const availableDatesObj = exampleDates.map((date) => new Date(date));
    const [selectedDate, setSelectedDate] = React.useState<Date>();
    const [timeSlots, setTimeSlots] = React.useState(defaultTimeSlots);

    // Check if a date is in the available dates array
    const isAvailable = (date: Date) =>
        availableDatesObj.some((availableDate) =>
            isSameDay(date, availableDate)
        );

    const handleDateChange = (date: Date | undefined) => {
        if (date && isAvailable(date)) {
            setSelectedDate(date);
        }
    };

    const handleTimeSlotSelect = (selectedSlot: string) => {
        setTimeSlots(
            timeSlots.map((slot) =>
                slot.slot === selectedSlot
                    ? { ...slot, isSelected: true }
                    : { ...slot, isSelected: false }
            )
        );
    };
    return (
        <DialogContent className="sm:max-w-[425px] md:max-w-screen-sm lg:max-w-screen-md">
            <DialogHeader>
                <DialogTitle>Book an appointment</DialogTitle>
                <DialogDescription>
                    Fill in the details below to book an appointment with your
                    doctor.
                </DialogDescription>
            </DialogHeader>
            <div className="flex">
                <div
                    className={`border-r pr-4 ${
                        selectedDate ? "w-[25%]" : "w-[40%]"
                    }`}>
                    <h2 className="font-medium mb-2">Select your doctor</h2>
                    <Select
                        onValueChange={(value) => {
                            console.log(value);
                        }}>
                        <SelectTrigger className="w-full]">
                            <SelectValue placeholder={"----"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Choose doctor</SelectLabel>
                                <SelectItem value="Y">Yes</SelectItem>
                                <SelectItem value="N">No</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className={`${selectedDate ? "w-[75%]" : "w-[60%]"} flex`}>
                    <div
                        className={`grid gap-4 py-4 ${
                            selectedDate ? "w-[80%]" : "w-full"
                        }`}>
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateChange}
                            modifiers={{
                                available: availableDatesObj,
                            }}
                            modifiersStyles={{
                                available: {
                                    border: "1px solid #4ade80",
                                },
                                selected: {
                                    backgroundColor: "#4ade80",
                                },
                            }}
                            className="rounded-md w-full p-4 items-center justify-center flex"
                        />
                        <div className="grid grid-cols-1 items-center gap-4 px-4">
                            <Label htmlFor="name">
                                <span className="font-semibold">Notes</span>
                                <br />
                                <small>
                                    Write some notes here about the reason for
                                    the appointment.
                                </small>
                            </Label>
                            <Textarea id="name" rows={5} />
                        </div>
                    </div>
                    <div
                        className={`flex gap-4 pt-8 flex-col h-[550px] overflow-y-auto ${
                            selectedDate ? "w-[20%]" : "hidden"
                        }`}>
                        {timeSlots.map((timeSlot, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex justify-center items-center rounded-md min-h-10 max-h-10 hover:cursor-pointer",
                                    {
                                        "text-white bg-primary hover:bg-primary/90 hover:text-primary":
                                            timeSlot.isSelected,
                                        "border border-primary text-primary hover:bg-primary hover:text-white":
                                            !timeSlot.isSelected,
                                    }
                                )}
                                onClick={(e) =>
                                    handleTimeSlotSelect(timeSlot.slot)
                                }>
                                {timeSlot.slot}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button
                    type="submit"
                    className={cn({
                        "mr-4": !selectedDate,
                    })}>
                    Book
                </Button>
            </DialogFooter>
        </DialogContent>
    );
};

export default AppointmentScheduleModal;
