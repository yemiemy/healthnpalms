import { Button } from "@/components/ui/button";
import { CheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const ProfileCompletionCard = (props: Props) => {
    return (
        <div className="mb-4 p-4 bg-white rounded-md text-slate-800 dark:bg-slate-800 dark:text-slate-100">
            <h1 className="font-semibold">Profile completion</h1>

            <div className="py-4 flex items-center relative">
                <CheckIcon
                    color="#ffffff"
                    width={20}
                    height={20}
                    className="p-1 flex flex-grow-0 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 z-50"
                />
                <div className="bg-gray-200 w-full flex-grow-0 flex-shrink-1 h-1 dark:bg-gray-700 flex relative">
                    <div className="bg-blue-500 w-[60%] h-1"></div>
                    <div className="w-3 h-3 border-blue-500 border-2 rounded-full bg-white absolute left-[60%] top-[-4px]"></div>
                </div>
                <StarIcon
                    color="#ffffff"
                    width={20}
                    height={20}
                    className="p-[2px] flex items-center justify-center rounded-full bg-black z-50"
                />
            </div>

            <div className="border w-full rounded-md p-4 flex gap-2">
                <span className="w-[20%] flex-shrink-0 self-start">
                    <Image
                        src="/application.png"
                        alt="profile-update-img"
                        width={512}
                        height={512}
                    />
                </span>
                <div className="flex-1">
                    <h1 className="font-semibold">Complete your profile bio</h1>
                    <p className="text-sm mb-2">
                        You have a few items to update in your profile.
                    </p>
                    <Button size="sm" className="bg-blue-500">
                        Update Profile
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCompletionCard;
