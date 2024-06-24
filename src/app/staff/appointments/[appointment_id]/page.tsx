"use client";
import React from "react";

type Props = {
    params: {
        appointment_id: string;
    };
};

const Page = ({ params: { appointment_id } }: Props) => {
    return <div>{appointment_id}</div>;
};

export default Page;
