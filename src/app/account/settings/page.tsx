import SideBar from "@/components/layouts/SideBar";
import Main from "@/components/settings/Main";
import React, { Suspense } from "react";

type Props = {};

const Page = (props: Props) => {
    return (
        <Suspense fallback={<p>Still loading...</p>}>
            <div className="flex">
                <SideBar isSettingsActive />
                <Main user={undefined} />
            </div>
        </Suspense>
    );
};

export default Page;
