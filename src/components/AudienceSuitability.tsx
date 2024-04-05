import {  Flex, Heading, Image, Text } from "@chakra-ui/react"
import audienceSuitabilityData from "../data/audienceSuitabilityData"

import membership from '../assets/membership-organisations.svg'
import national from '../assets/national-association.svg'
import clubs from '../assets/clubs-and-groups.svg'

const AudienceSuitability = () => {

  return (
    <Flex alignItems='center' flexDirection='column' >
      <Flex flexDirection='column' gap="10px" marginBottom='20px' width={{base:'100%',md:'600px'}}>
        <Heading size='heading2' textAlign='center'>Manage your entire community in a single system</Heading>
        <Text textAlign='center'>Who is Nextcent suitable for?</Text>
      </Flex>
      <Flex wrap='wrap' gap='30px' justifyContent='center'>
        {audienceSuitabilityData.map(data=>(
        <Flex key={data.id} bg='white' boxShadow='md' borderRadius='sm' paddingX={5} paddingY={4} width='320px' justifyContent='center' alignItems='center' flexDirection='column' >
          <Image boxSize='80px' src={data.id === 1 ? membership : data.id === 2 ? national:data.id ===3?clubs:''}/>
          <Heading size='heading3' textAlign='center'>{data.heading}</Heading>
          <Text textAlign='center'>{data.text}</Text>
        </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default AudienceSuitability
