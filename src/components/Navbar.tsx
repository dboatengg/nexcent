import { Flex, Box, Button, useDisclosure, Text, Image, HStack, Heading, IconButton, VStack, Link } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import navbarData from '../data/navbarData';
import logo from '../assets/logo.svg'
import '@fontsource/inter/300.css'
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  const { isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex as="nav" align="center" justify="space-between" padding="10px" color="white" boxShadow="sm">
      <Box>
        <HStack>
        <Image src={logo} alt="Logo" boxSize={{base:'40px',md:'45px',lg:'50px'}} /> 
        <Heading color='black' fontSize={{base:'25px',md:'28px',lg:'30px'}}>Nexcent</Heading>
        </HStack>
      </Box>

      <Box display={{ base: "none", md: "block" }} >
        {navbarData.map((item, index) => (
          <Button key={index} variant="ghost" mr={2} as="a" href={item.path}>
            {item.label}
          </Button>
        ))}
        <Button rightIcon={<HiMiniArrowLongRight />} variant='primary'>Register Now</Button>
      </Box>

      {/* Mobile Menu  */}
      {isOpen && (
        <VStack boxShadow='md' spacing={4} width="full" bg="white" paddingY='20px' position="absolute" top={20} left={0} zIndex={2}>
          {navbarData.map((item) => (
            <Link onClick={onClose} key={item.label}  p={4}>
              <Text fontSize="md">{item.label}</Text>
            </Link>
          ))}
          <Button rightIcon={<HiMiniArrowLongRight />} onClick={onClose} variant='primary'>Register Now</Button>
        </VStack>
      )}
      
        <IconButton icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />} onClick={isOpen ? onClose : onOpen} display={{ base: "block", md: "none" }} variant="ghost" aria-label="Menu" />
    </Flex>
  );
};

export default Navbar;