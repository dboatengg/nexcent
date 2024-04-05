import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

import customersImage from '../assets/customers.png'
import Client8 from '../assets/client-8.svg'
import Client2 from '../assets/client-2.svg'
import Client3 from '../assets/client-3.svg'
import Client4 from '../assets/client-4.svg'
import Client5 from '../assets/client-5.svg'
import Client6 from '../assets/client-6.svg'
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Customers = () => {
  return (
    <Box bg='silver' paddingY="20px">
        <Flex flexDirection={{base:'column',md:'row'}} alignContent='center' alignItems='center' paddingX="20px" maxWidth="1200px" mx="auto" gap='30px'>
            <Image boxSize={{base:'100%', md:'35%'}} src={customersImage}/>
            <Flex flexDirection="column" gap="15px">
                <Text>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</Text>
                <Text color="primary" fontWeight='semibold'>Tim Smith</Text>
                <Text>British Dragon Boat Racing Association</Text>
                <Flex justifyContent='space-between'>
                    <Image src={Client8}/>
                    <Image src={Client2}/>
                    <Image src={Client3}/>
                    <Image src={Client4}/>
                    <Image src={Client5}/>
                    <Image src={Client6}/>
                    <Button rightIcon={<ArrowForwardIcon />}  variant="secondary">Meet all customers</Button>
                </Flex>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Customers