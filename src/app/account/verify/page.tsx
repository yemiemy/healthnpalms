"use client";
import React, { Suspense } from "react";
import Verify from "./components/Verify";

type Props = {};

const Page = (props: Props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Verify />
        </Suspense>
    );
};

export default Page;
