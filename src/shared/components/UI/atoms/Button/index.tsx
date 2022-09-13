import React from "react";
import { Button as CUButton, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & { styleType?: "primary" | "secondary" | "tertiary" };

const Button: React.FC<Props> = ({ styleType = "primary", ...props }) => {
  const colorScheme = styleType && styleType === "primary" ? "red" : "";
  return (
    <CUButton
      {...props}
      py={6}
      colorScheme={props.colorScheme || colorScheme}
      borderRadius={4}
    />
  );
};

export default Button;
