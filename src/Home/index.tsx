import React from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  VStack,
  Image,
  Box,
  HStack,
  Avatar,
  Text,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { BaseTemplate, Container } from "../shared/components/templates";
import { Hero } from "../shared/components/UI/organisms";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Hero>
        <VStack spacing={6} align="center" justifyContent="center">
          <Heading as="h1" size="md" noOfLines={1}>
            NFT Marketplace
          </Heading>
          <Heading maxW="sm" as="h2" size="xl" noOfLines={2} textAlign="center">
            Discover, collect, and sell extraordinary NFTs
          </Heading>
          <ButtonGroup spacing="8">
            {["Explore now", "Create account"].map((item, index) => (
              <Button key={item} colorScheme={index === 0 ? "red" : "gray"}>
                {item}
              </Button>
            ))}
          </ButtonGroup>
        </VStack>
      </Hero>
      <Container>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          // gap={4}
          gap={40}
          pb={{ base: "12", md: "24" }}
        >
          <GridItem rowSpan={2} colSpan={3}>
            <Box borderRadius="lg" overflow="hidden">
              <AspectRatio ratio={1}>
                <Image
                  src="https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTM1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop"
                  alt="place holder image"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
          </GridItem>
          {/* <GridItem colSpan={2} bg="tomato"> */}
          <GridItem colSpan={2}>
            <Stack spacing={6}>
              <HStack spacing={4}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Box>
                  <Text fontSize="sm" color="gray">
                    Store
                  </Text>
                  <Text fontWeight="semibold">Footlocker UK</Text>
                </Box>
              </HStack>
              <Stack>
                <Heading as="h3" size="lg" noOfLines={1}>
                  Galaxey on Earth
                </Heading>
                <Text fontSize="md" color="gray">
                  12 Edition minted
                </Text>
              </Stack>
              <VStack>
                {["Buy now", "View details"].map((item, index) => (
                  <Button
                    w="full"
                    key={item}
                    colorScheme={index === 0 ? "red" : "gray"}
                  >
                    {item}
                  </Button>
                ))}
                <Text fontSize="sm" color="gray">
                  A 0% royalty goea to the creator for feature resale
                </Text>
              </VStack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </BaseTemplate>
  );
};

export default Home;
