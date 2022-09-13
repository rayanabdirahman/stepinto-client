import React from "react";
import { Divider as CUDivider, DividerProps, Flex } from "@chakra-ui/react";
import Text from "../Typography/Text";

type Props = DividerProps & {
  withText?: string;
};

const Divider: React.FC<Props> = ({ withText, ...props }) =>
  withText ? (
    <Flex align="center">
      <Divider />
      <Text styleType="gray" px={2}>
        {withText}
      </Text>
      <Divider />
    </Flex>
  ) : (
    <CUDivider {...props} />
  );

export default Divider;
