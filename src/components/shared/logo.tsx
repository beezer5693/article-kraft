import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/pen-logo.png";

const Logo = () => {
    return (
        <div className="mb-5">
            <Image src={logo} width={35} height={35} alt={"Article Kraft Logo"} />
        </div>
    );
};

export default Logo;
