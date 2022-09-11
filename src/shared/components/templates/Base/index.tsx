import React from "react";
import { Header } from "../../UI/organisms";

type Props = {
  children: React.ReactNode;
};

const BaseTemplate: React.FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default BaseTemplate;
