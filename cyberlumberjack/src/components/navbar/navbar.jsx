import React from "react";
import { Nav, NavMenu } from "./navbarElement";
import logo from "../../assets/logo.png";
import { Button, Text, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Nav>
      <HStack>
        <img src={logo} alt="logo" width="75px" />
        <Text>Cyber Lumberjack</Text>
      </HStack>

      <NavMenu>
        <Button>Wallet</Button>
      </NavMenu>
    </Nav>
  );
};
export default Navbar;
