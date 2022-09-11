import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Container } from "../../../templates";

const Header: React.FC = () => (
  // <Box as="section" pb={{ base: "12", md: "24" }}>
  <Box as="section">
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <Container>
        <HStack spacing="10" justify="space-between">
          <Image
            src="/images/logo-black.svg"
            alt="Vercel Logo"
            width={88}
            height={80}
          />
          <Flex justify="space-between" flex="1">
            <ButtonGroup variant="link" spacing="8">
              {["Product", "Pricing", "Resources", "Support"].map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </ButtonGroup>
            <HStack spacing="3">
              <Button variant="ghost">Sign in</Button>
              <Button variant="primary">Sign up</Button>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  </Box>
);

export default Header;