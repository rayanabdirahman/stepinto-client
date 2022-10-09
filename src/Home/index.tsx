import React from "react";
import { AppTemplate } from "../shared/components/templates";
import { Heading, Text } from "../shared/components/UI/atoms";
import withAuthentication from "../shared/HOC/withAuthentication";

const Home: React.FC = ({ user }: any) => {
  return (
    <AppTemplate>
      <Text>Hello World {user.name}</Text>
    </AppTemplate>
  );
};

export default withAuthentication(Home) as React.FC;
