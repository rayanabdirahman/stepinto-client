import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Menu as CUMenu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axiosHelper from "../../../../utilities/axiosHelper";
import { pageUrl } from "../../../../domain/constants/pageUrl";

type Props = {
  user: any;
};

const Menu: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const signOut = async () => {
    await axiosHelper.post("/accounts/auth/signout", {});
    router.push(pageUrl.SIGN_IN);
  };

  return (
    <CUMenu>
      <MenuButton>
        <Avatar size="sm" name={user.name} src={user.avatar} />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Orders</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem onClick={signOut}>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </CUMenu>
  );
};

export default Menu;
