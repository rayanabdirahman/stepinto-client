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
import Link from "next/link";
import { pageUrl } from "../../../../domain/constants/pageUrl";
import Logo from "../../atoms/Logo";

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
          <Logo />
          <Flex justify="flex-end" flex="1">
            {/* <ButtonGroup variant="link" spacing="8">
              {["Product", "Pricing", "Resources", "Support"].map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </ButtonGroup> */}
            <HStack spacing="3">
              <Button variant="ghost">
                <Link href={`${pageUrl.SIGN_IN}`}>Sign in</Link>
              </Button>
              <Button variant="ghost">
                <Link href={`${pageUrl.SIGN_UP}`}>Sign up</Link>
              </Button>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  </Box>
);

export default Header;
