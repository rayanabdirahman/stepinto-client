import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

export const FullPageSpinner: React.FC = () => (
  <Box pt="40" h="100vh">
    <Center>
      <Spinner />
    </Center>
  </Box>
);
