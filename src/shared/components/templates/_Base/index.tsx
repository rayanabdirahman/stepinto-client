import React from "react";
import { Head } from "../../UI/molecules";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const BaseTemplate: React.FC<Props> = ({ title, children }: Props) => (
  <>
    <Head title={title} />
    <main>{children}</main>
  </>
);

export default BaseTemplate;
