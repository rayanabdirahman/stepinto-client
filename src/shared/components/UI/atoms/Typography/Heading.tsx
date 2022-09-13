import React from "react";
import { Heading as CUHeading, HeadingProps } from "@chakra-ui/react";

type Props = HeadingProps & {
  styleType?: "dark" | "light" | "gray";
  textWeight?: "normal" | "semibold" | "bold";
};

const Heading: React.FC<Props> = ({ styleType = "dark", ...props }) => {
  const color =
    styleType === "light"
      ? "white"
      : styleType === "gray"
      ? "gray"
      : "gray.800";
  return <CUHeading {...props} color={props.color || color} />;
};

export default Heading;
