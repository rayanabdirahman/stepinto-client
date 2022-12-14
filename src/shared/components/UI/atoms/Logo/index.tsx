import React from "react";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { pageUrl } from "../../../../domain/constants/pageUrl";

type Props = {
  type?: "dark" | "light";
};

const Logo: React.FC<Props> = ({ type }) => (
  <Link href={pageUrl.HOME}>
    <a>
      <Image
        src={
          type === "light" ? "/images/logo-white.svg" : "/images/logo-black.svg"
        }
        alt="Vercel Logo"
      />
    </a>
  </Link>
);

export default Logo;
