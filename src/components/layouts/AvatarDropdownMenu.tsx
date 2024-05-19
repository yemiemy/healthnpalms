import {
    CalendarDaysIcon,
    LayoutGridIcon,
    LogOutIcon,
    Settings,
    User,
    Users,
} from "lucide-react";

import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Logout from "../utils/Logout";
import Link from "next/link";

type Props = {
    mobile?: boolean;
    staff?: boolean;
};

export function AvatarDropdownMenu({ mobile, staff }: Props) {
    return (
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {mobile && (
                <>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <LayoutGridIcon className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </DropdownMenuItem>
                        {staff && (
                            <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                <span>Patients</span>
                            </DropdownMenuItem>
                        )}

                        <DropdownMenuItem>
                            <CalendarDaysIcon className="mr-2 h-4 w-4" />
                            <span>Appointments</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                </>
            )}
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Link href="/profile" className="flex">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                <Logout />
            </DropdownMenuItem>
        </DropdownMenuContent>
    );
}
