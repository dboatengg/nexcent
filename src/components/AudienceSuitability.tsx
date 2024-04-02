import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import audienceSuitabilityData from "../data/audienceSuitabilityData"

import membership from '../assets/membership-organisations.svg'
import national from '../assets/national-association.svg'
import clubs from '../assets/clubs-and-groups.svg'

const AudienceSuitability = () => {

  

  return (
    <SimpleGrid columns={{sm:1,md:2,lg:3}} gap='20px' justifyItems='center' marginBottom='40px'>
      {audienceSuitabilityData.map(data=>(
      <Flex key={data.id} maxWidth='500px' justifyContent='center' alignItems='center' flexDirection='column' >
        <Image boxSize='80px' src={data.id === 1 ? membership : data.id === 2 ? national:data.id ===3?clubs:''}/>
        <Heading fontSize='30px' textAlign='center'>{data.heading}</Heading>
        <Text textAlign='center'>{data.text}</Text>
      </Flex>
      ))}
    </SimpleGrid>
  )
}

export default AudienceSuitability
