import React from "react";
import { Container as CUIContainer } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => (
  <CUIContainer maxW="container.xl">{children}</CUIContainer>
);

export default Container;
