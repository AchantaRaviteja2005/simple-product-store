import React, { useState } from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { px } from "framer-motion";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"max-width"} px={8}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontFamily={"Poppins"}
          fontSize={{ base: "28", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button alignItems={"center"}>
              <CiSquarePlus fontSize={20} />
              <Text fontSize={15} px={2}>
                Create Product
              </Text>
            </Button>
          </Link>
          <Button alignItems={"center"} onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MdOutlineDarkMode />
            ) : (
              <MdOutlineLightMode />
            )}
            <Text fontSize={15} px={2}>
              Switch Mode
            </Text>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
