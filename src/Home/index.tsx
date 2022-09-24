import React from "react";
import { Container } from "../shared/components/templates";
import { Heading } from "../shared/components/UI/atoms";
import withAuthentication from "../shared/HOC/withAuthentication";

const Home: React.FC = ({ user }: any) => {
  return (
    <Container>
      <Heading>Hello World {user.name}</Heading>
    </Container>
  );
};

export default withAuthentication(Home);
