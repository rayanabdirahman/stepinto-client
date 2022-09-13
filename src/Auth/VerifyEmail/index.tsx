import { Box, Center, Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { Button, Heading, Logo, Text } from "../../shared/components/UI/atoms";
import { HiMail } from "react-icons/hi";
import { Container } from "../../shared/components/templates";

const VerifyEmail: React.FC = () => {
  return (
    <Box as="section" h="100vh">
      <Container>
        <Logo />
        <Center textAlign="center">
          <Stack spacing={6} w="md">
            <Center>
              <Flex
                h="80px"
                w="80px"
                bg="gray.100"
                borderRadius="full"
                justifyContent="center"
                alignItems="center"
              >
                <HiMail size={40} />
              </Flex>
            </Center>
            <Stack spacing={4}>
              <Heading as="h1" size="lg" noOfLines={1}>
                Verify your email address
              </Heading>
              <Text styleType="gray" fontSize="md">
                We&apos;ve sent an email to <b>test@gmail.com</b>. To start
                using Stepinto, we need to verify your email address.
              </Text>
            </Stack>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default VerifyEmail;
