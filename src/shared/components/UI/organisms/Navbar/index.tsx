import React from "react";
import {
  Box,
  Button,
  Center,
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
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const { user } = useUser();
  const { pathname } = useRouter();
  const boxShadowColor = useColorModeValue("sm", "sm-dark");

  if (pathname.split("/").includes("auth") || !user) {
    return null;
  }

  return (
    <Box as="section" py={4} boxShadow={boxShadowColor}>
      <Box as="nav" bg="bg-surface">
        <Container>
          <HStack spacing="10" justify="space-between" alignItems="center">
            <Logo />
            <Center width="xl">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoSearch color="gray" />}
                />
                <Input variant="filled" placeholder="Search" />
              </InputGroup>
            </Center>
            <Flex justify="flex-end">
              {user ? (
                <HStack spacing="3">
                  <Button size="sm" variant="ghost">
                    <IoNotificationsOutline size={24} />
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
