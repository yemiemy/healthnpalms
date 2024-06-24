"use client";
import React, { Suspense } from "react";
import LoginForm from "./components/LoginForm";

type Props = {};

const Page = (props: Props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
};

export default Page;
