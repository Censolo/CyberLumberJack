import React from "react";
import { Nav, NavMenu } from "./navbarElement";
import logo from "../../assets/logo/logo512.png";
import { Button, Text, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Nav>
      <HStack ml="2" mt="2">
        <img src={logo} alt="logo" width="75px" />
        <Text>Cyber Lumberjack</Text>
      </HStack>

      <NavMenu>
        <Button mr="2">Wallet</Button>
      </NavMenu>
    </Nav>
  );
};
export default Navbar;
