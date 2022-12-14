import {
  useColorModeValue,
  HStack,
  Box,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Container from "../Container";
import { Heading, Logo, Text, Alert } from "../../UI/atoms";
import BaseTemplate from "../_Base";

type Props = {
  title: string;
  subTitle: string;
  metaTitle?: string;
  errorMessage?: string;
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({
  title,
  subTitle,
  metaTitle,
  errorMessage,
  children,
}: Props) => (
  <BaseTemplate title={metaTitle}>
    <Box as="section" h="100vh" bg="black">
      <Container>
        <HStack pt={10} pb={10} spacing="10" justify="space-between">
          <Logo type="light" />
        </HStack>

        <Center>
          <Stack spacing={6}>
            {errorMessage && <Alert status="error">{errorMessage}</Alert>}
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
          </Stack>
        </Center>
      </Container>
    </Box>
  </BaseTemplate>
);

export default AuthTemplate;
