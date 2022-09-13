import {
  useColorModeValue,
  HStack,
  Box,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Container from "../Container";
import { Heading, Logo, Text } from "../../UI/atoms";

type Props = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({
  title,
  subTitle,
  children,
}: Props) => (
  <Box as="section" h="100vh" bg="black">
    <Container>
      <HStack spacing="10" justify="space-between">
        <Logo type="light" />
      </HStack>

      <Center>
        <Box
          w="md"
          p={10}
          bg="black"
          rounded="md"
          border="1px"
          borderColor="gray.800"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Stack spacing={6}>
            <Stack>
              <Heading styleType="light" as="h1" size="md" noOfLines={1}>
                {title}
              </Heading>
              <Text styleType="gray" fontSize="md">
                {subTitle}
              </Text>
            </Stack>
            {children}
          </Stack>
        </Box>
      </Center>
    </Container>
  </Box>
);

export default AuthTemplate;
