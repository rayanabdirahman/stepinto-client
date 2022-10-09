import React from "react";
import Container from "../Container";
import BaseTemplate from "../_Base";

type Props = {
  metaTitle?: string;
  children: React.ReactNode;
};

const AppTemplate: React.FC<Props> = ({ metaTitle, children }: Props) => (
  <BaseTemplate title={metaTitle}>
    <Container>{children}</Container>
  </BaseTemplate>
);

export default AppTemplate;
