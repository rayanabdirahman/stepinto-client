import React from "react";
import { Text as CUText, TextProps } from "@chakra-ui/react";

type Props = TextProps & {
  styleType?: "dark" | "light" | "gray";
  textWeight?: "normal" | "semibold" | "bold";
};

const Text: React.FC<Props> = ({ styleType = "dark", ...props }) => {
  const color =
    styleType === "light"
      ? "white"
      : styleType === "gray"
      ? "gray"
      : "gray.800";
  return <CUText {...props} color={props.color || color} />;
};

export default Text;
