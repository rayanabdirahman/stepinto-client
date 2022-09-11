import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "../../../templates/Container";

type Props = {
  children: React.ReactNode;
};

const Hero: React.FC<Props> = ({ children }) => {
  return (
    <Box
      as="section"
      pt={{ base: "12", md: "24" }}
      pb={{ base: "12", md: "24" }}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default Hero;
