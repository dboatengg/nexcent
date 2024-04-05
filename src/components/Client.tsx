import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Client1 from '../assets/client-1.svg'
import Client2 from '../assets/client-2.svg'
import Client3 from '../assets/client-3.svg'
import Client4 from '../assets/client-4.svg'
import Client5 from '../assets/client-5.svg'
import Client6 from '../assets/client-6.svg'
import Client7 from '../assets/client-7.svg'

const Client = () => {
  return (
    <Box textAlign='center' paddingY='50px'>
      <Heading size="heading2">Our Clients</Heading>
      <Text>We have been working with some Fortune 500+ clients</Text>

      <Flex wrap="wrap" justifyContent='center' marginTop={5}  columnGap={{base:'40px',md:'100px'}}>
        <Image boxSize='60px' src={Client1}/>
        <Image boxSize='60px' src={Client2}/>
        <Image boxSize='60px' src={Client3}/>
        <Image boxSize='60px' src={Client4}/>
        <Image boxSize='60px' src={Client5}/>
        <Image boxSize='60px' src={Client6}/>
        <Image boxSize='60px' src={Client7}/>
    </Flex>

    </Box>
  )
}

export default Client
