import React from "react";
import Link from "next/link";
import Image from "next/image";
import { pageUrl } from "../../../../domain/constants/pageUrl";
import Button from "../Button";

type Props = {
  type?: "dark" | "light";
};

const Logo: React.FC<Props> = ({ type }) => (
  <Link href={pageUrl.HOME}>
    <Button variant="link">
      <Image
        src={
          type === "light" ? "/images/logo-white.svg" : "/images/logo-black.svg"
        }
        alt="Vercel Logo"
        width={88}
        height={72}
      />
    </Button>
  </Link>
);

export default Logo;
