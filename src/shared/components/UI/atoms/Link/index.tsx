import React from "react";
import { default as NextLink } from "next/link";
import { Link as CULink, LinkProps } from "@chakra-ui/react";

type Props = LinkProps & { href: string };

const Link: React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <CULink {...props} color="blue.500">
        {children}
      </CULink>
    </NextLink>
  );
};

export default Link;
