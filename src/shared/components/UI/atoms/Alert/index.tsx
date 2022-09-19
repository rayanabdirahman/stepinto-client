import React from "react";
import { Alert as CUAlert, AlertIcon, AlertProps } from "@chakra-ui/react";

type Props = AlertProps;

const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <CUAlert {...props} py={6} rounded="md">
      <AlertIcon />
      {props.children}
    </CUAlert>
  );
};

export default Button;
