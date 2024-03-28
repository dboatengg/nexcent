import { Flex, Box, Button, useDisclosure, Image, HStack, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import navbarData from '../data/navbarData';
import logo from '../assets/logo.svg'
import '@fontsource/inter/300.css'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="10px"
      color="white"
      boxShadow='md'
    
    >
      <Box>
        <HStack>
        <Image src={logo} alt="Logo" boxSize={{base:'40px',md:'45px',lg:'50px'}} /> 
        <Heading color='black' fontSize={{base:'25px',md:'28px',lg:'30px'}}>Nexcent</Heading>
        </HStack>
      </Box>

      <Box display={{ base: isOpen ? "block" : "none", md: "block" }} >
        {navbarData.map((item, index) => (
          <Button key={index} variant="ghost" mr={2} as="a" href={item.path}>
            {item.label}
          </Button>
        ))}
        <Button bg='green.300' color='white' variant='unstyled' pt={2} pb={2} pr={4} pl={4}>Register Now</Button>
      </Box>

        <Button
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          leftIcon={<HamburgerIcon color='black' boxSize={7}/>}
          variant='unstyled'
        >
        </Button>
    </Flex>
  );
};

export default Navbar;