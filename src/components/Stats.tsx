import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import StatsCard from "./StatsCard"


const Stats = () => {
  return (
    <SimpleGrid columns={{base:1,md:2}} gap="30px" alignItems='center'>
      <Flex gap='5px' flexDirection='column' alignItems={{base:'center',md:'start'}}>
        <Heading textAlign={{base:'center',md:'start'}}>Having a local</Heading>
        <Heading textAlign={{base:'center',md:'start'}} fontSize='30px'>business reinvent itself</Heading>
        <Text>We reached here with our hard work and dedication</Text>
      </Flex>
      <StatsCard/>
    </SimpleGrid>
  )
}

export default Stats
