"use client";
import { generateInitialsImage } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const PatientListCard = (props: Props) => {
    return (
        <div className="mt-4 mb-4 p-4 bg-white text-slate-800 dark:bg-slate-800 dark:text-white rounded-md w-full">
            <div className="flex justify-between w-full">
                <h1 className="font-semibold">List of Patients</h1>
                <Link
                    href="/"
                    className="ml-auto text-blue-400 hover:underline">
                    View all
                </Link>
            </div>

            <div className="w-full pt-4 overflow-auto max-h-96 max-w-full">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr className="uppercase">
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                Name
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                Gender
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full flex-grow-0 mb-auto"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td className="flex gap-2">
                                <Image
                                    src={generateInitialsImage("John Doe")}
                                    alt="John Doe"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:underline">
                                    John Doe
                                </Link>
                            </td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Male</td>
                            <td>32</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientListCard;
