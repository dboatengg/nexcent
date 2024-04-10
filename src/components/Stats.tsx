import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import StatsCard from "./StatsCard"


const Stats = () => {
  return (
    <Box  bg="silver" paddingY="60px">
      <SimpleGrid gap="30px" alignItems='center' columns={{base:1,md:2}} paddingX="20px" maxWidth="1200px" mx="auto">
      <Flex gap='5px' flexDirection='column' alignItems={{base:'center',md:'start'}}>
        <Heading textAlign={{base:'center',md:'start'}}>Having a local</Heading>
        <Heading color='primary' textAlign={{base:'center',md:'start'}} fontSize='30px'>business reinvent itself</Heading>
        <Text >We reached here with our hard work and dedication</Text>
      </Flex>
      <StatsCard/>
      </SimpleGrid>
    </Box>
  )
}

export default Stats
