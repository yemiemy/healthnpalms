"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    DialogClose,
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
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { addHours } from "date-fns";
import { toast } from "sonner";
import axios from "@/lib/api";
import { useRouter } from "next/navigation";
import { Availability, MedicalProfessional } from "@/lib/models/staff/models";
import { DateRange } from "react-day-picker";

type Props = {
    token?: string;
    setRefreshAppointments: React.Dispatch<React.SetStateAction<boolean>>;
};

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

const AppointmentScheduleModal = ({ token, setRefreshAppointments }: Props) => {
    const router = useRouter();
    const [availabilities, setAvailabilities] = React.useState<Availability[]>(
        []
    );
    const [availableDateRanges, setAvailableDateRanges] = React.useState<
        DateRange[]
    >([]);
    const [selectedDate, setSelectedDate] = React.useState<Date>();
    const [timeSlots, setTimeSlots] = React.useState(defaultTimeSlots);
    const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string>("");
    const [doctors, setDoctors] = React.useState<MedicalProfessional[]>();
    const [selectedDoctor, setSelectedDoctor] = React.useState<string>();
    const [btnLoader, setBtnLoader] = React.useState<boolean>(false);
    const closeModal = React.useRef<HTMLButtonElement>(null);

    const getAvailabilities = async (medical_professional_id: string) => {
        try {
            if (!token || token.length == 0) {
                toast.error("Please login to continue.");
                router.push("/login?next=" + window.location.href);
            }
            const response = await axios.get("/appointments/availabilities/", {
                params: {
                    medical_professional_id,
                },
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setAvailabilities(data.results);
        } catch (err: any) {
            console.log("Error", err);
            toast.error("Couldn't connect with the server");
        }
    };

    const getDoctors = React.useCallback(async () => {
        try {
            if (!token || token.length == 0) {
                toast.error("Please login to continue.");
                router.push("/login?next=" + window.location.href);
            }
            const response = await axios.get("/accounts/doctors/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            setDoctors(response.data.results);
        } catch (err: any) {
            console.log("Error", err);
            toast.error("Couldn't connect with the server");
        }
    }, [router, token]);

    const handleDoctorSelect = async (value: string) => {
        if (value !== "no-id") {
            await getAvailabilities(value);
            setSelectedDoctor(value);
        }
    };

    React.useEffect(() => {
        let dateRanges: DateRange[] = [];
        if (availabilities && availabilities.length > 0) {
            availabilities.forEach((availability) => {
                if (!availability.is_booked) {
                    dateRanges.push({
                        from: new Date(availability.start_time),
                        to: new Date(availability.end_time),
                    });
                }
            });
        }
        setAvailableDateRanges(dateRanges);
    }, [availabilities]);

    // Check if a date is in the available dates array
    const isAvailable = (date: Date) => {
        return availableDateRanges.some(
            (range) => date >= range.from! && date <= range.to!
        );
    };

    const handleDateChange = (date: Date | undefined) => {
        if (!date) return;

        date = new Date(addHours(date.toISOString(), 1));
        if (isAvailable(date)) {
            setSelectedDate(date);
        }
    };

    const handleTimeSlotSelect = (selectedSlot: string) => {
        setSelectedTimeSlot(selectedSlot + ":00.000Z");
        setTimeSlots(
            timeSlots.map((slot) =>
                slot.slot === selectedSlot
                    ? { ...slot, isSelected: true }
                    : { ...slot, isSelected: false }
            )
        );
    };

    React.useEffect(() => {
        getDoctors();
    }, [getDoctors]);

    const handleBookAppointment = async (e: any) => {
        e.preventDefault();

        setBtnLoader(true);
        if (!selectedDate || !selectedTimeSlot || !selectedDoctor) {
            toast.error("Please select your booking date and time.");
            return;
        }
        let start_time =
            selectedDate.toISOString().split("T")[0] + "T" + selectedTimeSlot;
        let end_time = addHours(new Date(start_time), 1).toISOString();
        try {
            const response = await axios.post(
                "/appointments/book/",
                JSON.stringify({
                    start_time,
                    end_time,
                    medical_professional_id: selectedDoctor,
                }),
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            setSelectedDate(undefined);
            setSelectedTimeSlot("");
            setSelectedDoctor("");
            setAvailableDateRanges([]);
            setAvailabilities([]);
            setRefreshAppointments((prev) => !prev);
            toast.success("Your appointment has been successfully booked.");
            closeModal.current?.click();
        } catch (err: any) {
            console.log("Error:", err);
            toast.error("Unable to complete your booking. Please try again.");
        } finally {
            setBtnLoader(false);
        }
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
                            handleDoctorSelect(value);
                        }}>
                        <SelectTrigger className="w-full]">
                            <SelectValue placeholder={"----"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Choose doctor</SelectLabel>
                                {doctors && doctors.length > 0 ? (
                                    doctors.map((doctor) => (
                                        <SelectItem
                                            value={doctor.id}
                                            key={doctor.id}>
                                            {doctor.user.full_name}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <SelectItem value="no-id">---</SelectItem>
                                )}
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
                                available: availableDateRanges,
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
                    })}
                    disabled={!selectedDate || !selectedTimeSlot || btnLoader}
                    onClick={handleBookAppointment}>
                    Book
                </Button>
                <DialogClose ref={closeModal} className="hidden"></DialogClose>
            </DialogFooter>
        </DialogContent>
    );
};

export default AppointmentScheduleModal;
