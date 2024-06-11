"use client";

import Image from "next/image";
import Link from "next/link";
import blackLogo from "../../../public/assets/pen-black.png";
import whiteLogo from "../../../public/assets/pen-white.png";

export function Logo() {
  return (
    <Link href={"/"}>
      <div className="mb-5">
        <Image
          src={blackLogo}
          className="block dark:hidden"
          width={35}
          height={35}
          priority={true}
          quality={65}
          alt={"Article Kraft Logo"}
        />
        <Image
          src={whiteLogo}
          className="hidden dark:block"
          width={35}
          height={35}
          priority={true}
          quality={65}
          alt={"Article Kraft Logo"}
        />
      </div>
    </Link>
  );
}
