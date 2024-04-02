import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react"
import Client1 from '../assets/client-1.svg'
import Client2 from '../assets/client-2.svg'
import Client3 from '../assets/client-3.svg'
import Client4 from '../assets/client-4.svg'
import Client5 from '../assets/client-5.svg'
import Client6 from '../assets/client-6.svg'
import Client7 from '../assets/client-7.svg'

const Client = () => {
  return (
    <Box textAlign='center'>
      <Heading>Our Clients</Heading>
      <Text>We have been working with some Fortune 500+ clients</Text>

      <Grid templateColumns={{base:'repeat(3, 1fr)', md:'repeat(4, 1fr)', lg:'repeat(7, 1fr)'}} justifyItems='center' paddingTop={5}  gap={4}>
        <Image src={Client1}/>
        <Image src={Client2}/>
        <Image src={Client3}/>
        <Image src={Client4}/>
        <Image src={Client5}/>
        <Image src={Client6}/>
        <Image src={Client7}/>
    </Grid>

    </Box>
  )
}

export default Client
