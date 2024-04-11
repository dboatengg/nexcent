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
          <Link variant="footerLink"><FaInstagram size={20}/></Link>
          <Link variant="footerLink"><FaDribbble size={20}/></Link>
          <Link variant="footerLink"><FaTwitter size={20}/></Link>
          <Link variant="footerLink"><FaYoutube size={20}/></Link>
        </Flex>
    </Flex>
  )
}

export default Footer2