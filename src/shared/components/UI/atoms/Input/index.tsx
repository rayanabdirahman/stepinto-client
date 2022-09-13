import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CUInput,
  InputProps,
} from "@chakra-ui/react";

type Props = InputProps & {
  label: string;
  isInvalid?: boolean | undefined;
  errorMsg?: string;
  styleType?: "dark" | "light";
};

const Input: React.FC<Props> = ({
  label,
  isInvalid,
  errorMsg,
  styleType = "light",
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel color="white">{label}</FormLabel>
      <CUInput
        {...props}
        borderColor={styleType === "dark" ? "gray.800" : "gray.200"}
        color={styleType === "dark" ? "white" : "gray.800"}
        py={6}
      />
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
};

export default Input;
