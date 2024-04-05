import { Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import pixelImage from '../assets/pixel.png'

const Pixel = () => {
  return (
    <SimpleGrid columns={{sm:1,md:2}} gap='20px' alignItems='center'  paddingY='10px'>
      <Image src={pixelImage}/>
      <Flex flexDirection='column' alignItems={{base:'center', md:'start'}} gap='20px'>
        <Heading textAlign={{base:'center', md:'start'}}>The unseen of spending three years at Pixelgrade</Heading>
        <Text textAlign={{base:'center', md:'start'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Text>
        <Button variant='primary'>Learn More</Button>
      </Flex>
    </SimpleGrid>
  )
}

export default Pixel
