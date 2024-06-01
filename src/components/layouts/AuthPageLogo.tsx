import React from "react";
import Image from "next/image";
import logo from "../../../public/Healthnpalms.png";

type Props = {};

const AuthPageLogo = (props: Props) => {
    return (
        <div className="w-[250px] h-[250px] flex items-center justify-center -mb-8">
            <Image src={logo} alt="healthNpalms_logo" />
        </div>
    );
};

export default AuthPageLogo;
