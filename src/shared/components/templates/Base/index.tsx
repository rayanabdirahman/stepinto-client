import React from "react";

type Props = {
  children: React.ReactNode;
};

const BaseTemplate: React.FC<Props> = ({ children }: Props) => <>{children}</>;

export default BaseTemplate;
