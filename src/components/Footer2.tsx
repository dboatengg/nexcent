import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import logo from '../assets/logo-main.svg'
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"



const Footer2 = () => {
  return (
    <Flex flexDirection='column' alignItems="flex-start" gap="20px">
        <Image width="180px" src={logo}/>
        <Box>
          <Text variant="footer">Copyright © 2020 Landify UI Kit.</Text>
          <Text variant="footer">All rights reserved</Text>
        </Box>
        <Flex alignItems="center" gap="10px">
          <Link><FaInstagram/></Link>
          <Link><FaDribbble/></Link>
          <Link><FaTwitter/></Link>
          <Link><FaYoutube/></Link>
        </Flex>
    </Flex>
  )
}

export default Footer2