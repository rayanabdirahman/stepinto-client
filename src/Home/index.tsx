import React from "react";
import { AppTemplate } from "../shared/components/templates";
import { Heading } from "../shared/components/UI/atoms";
import withAuthentication from "../shared/HOC/withAuthentication";

const Home: React.FC = ({ user }: any) => {
  return (
    <AppTemplate>
      <Heading>Hello World {user.name}</Heading>
    </AppTemplate>
  );
};

export default withAuthentication(Home) as React.FC;
