import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import useUser from "../../../../hooks/useUser";
import { Container } from "../../../templates";
import { Logo } from "../../atoms";
import Menu from "./Menu";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const { user } = useUser();
  const { pathname } = useRouter();

  if (pathname.split("/").includes("auth")) {
    return null;
  }

  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container>
          <HStack spacing="10" justify="space-between" alignItems="center">
            <Logo />
            <Flex justify="space-between" flex="1">
              <InputGroup pr={6}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoSearch color="gray.300" />}
                />
                <Input type="tel" placeholder="Search" />
              </InputGroup>
              {user ? (
                <HStack spacing="3">
                  <Button size="sm" variant="ghost">
                    Footfall
                  </Button>
                  <Button size="sm" variant="ghost">
                    Favourites
                  </Button>

                  <Menu user={user} />
                </HStack>
              ) : (
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              )}
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
