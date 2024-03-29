import React from "react";
import "../index.css";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Avatar,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Link as ReachLink } from "react-scroll";
// import resume from "../assets/Resume_final.pdf";
import logo from "../assets/rb_logo.png";
const navItem = [
  { path: "home", name: "Home" },
  { path: "about", name: "About" },
  { path: "skills", name: "Skills" },
  { path: "projects", name: "Projects" },
  { path: "contact", name: "Contact" },
];

// const secondryColor = "#2442d7";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <chakra.header
        w="full"
        h="70px"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        pos={"sticky"}
        top="0"
        zIndex={10}
        bgGradient="radial-gradient(circle at 27.1% 51.8%, #A6E1FA 0.5%, #A6E1FA 94.4%);"
        // bg="black"
        color="black"
        fontWeight="bold"
      >
        <Flex justifyContent="space-between" mx="auto" mb="20px">
          <chakra.a
            href="/"
            title="Raj Baghel"
            display="flex"
            alignItems="center"
          >
            <Avatar
              size="md"
              name="Raj Baghel"
              src={logo}
              _hover={{ transform: "rotate(90deg)" }}
            />
          </chakra.a>
          <HStack spacing={3} display={{ base: "none", md: "flex" }} gap="6">
            {navItem.map((item, i) => {
              return (
                <Link
                  as={ReachLink}
                  key={item.path}
                  activeClass={"active"}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={item.path === "skills" ? -180 : -60}
                  duration={700}
                  fontSize="18"
                  _hover={{ color: "#0078ff" }}
                >
                  {item.name}
                </Link>
              );
            })}
          </HStack>
          <Link
            display={{ base: "none", md: "flex" }}
            target="_blank"
            // href={resume}
            href="https://drive.google.com/file/d/17U-Puu7c9lPExScE2EOjjsPyjFfNCx1j/view?usp=sharing"
            // download="Raj_Baghel_Resume" // if we want to download functionality just uncomment it.
            _hover={{ textDecoration: "none" }}
          >
            {/* <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger" _hover={{backgroundColor:"#28324c", color:"#dcd0ce"}}>
              Download Resume
            </Button> */}
            <Button
              variant="solid"
              leftIcon={<AiOutlineDownload />}
              colorScheme="messenger"
              _hover={{ backgroundColor: "#28324c", color: "#dcd0ce" }}
            >
              Resume
            </Button>
          </Link>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              colorScheme={"blackAlpha"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
            />
            <VStack
              pos="absolute"
              left={0}
              right={0}
              top={16}
              display={isOpen ? "flex" : "none"}
              pb="6"
              rounded="sm"
              shadow="sm"
              bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
              // bg="black"
              color="white"
            >
              {navItem.map((item) => {
                return (
                  <Link
                    fontSize="xl"
                    fontWeight="500"
                    key={item.path}
                    as={ReachLink}
                    activeClass={"active"}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={item.path === "skills" ? -180 : -60}
                    duration={700}
                    onClick={isOpen ? onClose : onOpen}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                target="_blank"
                // href={resume}
                href="https://drive.google.com/file/d/17U-Puu7c9lPExScE2EOjjsPyjFfNCx1j/view?usp=sharing"
                // download="Raj_Baghel_Resume"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  variant="solid"
                  leftIcon={<AiOutlineDownload />}
                  colorScheme="#2C974B"
                >
                  Resume
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Navbar;
