"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import blackLogo from "../../../public/assets/pen-black.png";
import whiteLogo from "../../../public/assets/pen-white.png";
import { useTheme } from "next-themes";

export function Logo() {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="mb-5">
            <Image
                src={theme === "light" ? blackLogo : whiteLogo}
                width={35}
                height={35}
                priority={true}
                quality={65}
                alt={"Article Kraft Logo"}
            />
        </div>
    );
}
