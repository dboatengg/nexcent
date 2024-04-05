import members from '../assets/members.svg'
import clubs from '../assets/clubs.svg'
import bookings from '../assets/bookings.svg'
import payment from '../assets/payments.svg'
import { Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import statsData from '../data/statsData'

const StatsCard = () => {
  return (
    <SimpleGrid columns={2} rowGap='30px' justifyItems={{base:'center',md:'start'}}>
      {statsData.map(data=>(
        <Flex alignItems='flex-start' gap="15px" key={data.id}>
        <Image src={data.id === 1 ? members:data.id === 2 ?clubs: data.id === 3 ?bookings: data.id === 4?payment:''}/>
            <VStack alignItems='flex-start'>
                <Heading fontSize='20px'>{data.heading}</Heading>
                <Text fontSize='14px'>{data.text}</Text>
            </VStack>
        </Flex>
      ))}
    </SimpleGrid>
  )
}

export default StatsCard
