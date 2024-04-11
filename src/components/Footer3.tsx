import { Flex, Heading, Link, SimpleGrid } from "@chakra-ui/react"
import { footerSupport, footerCompany } from "../data/footer"

const Footer3 = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
        <Flex flexDirection="column" alignItems="flex-start" gap="20px">
            <Heading fontSize={{base:'20px', md:'25px'}}>Company</Heading>
            <Flex flexDirection="column" alignItems="flex-start" gap="10px">
                {footerCompany.map(data => <Link variant="footer" key={data.id}>{data.label}</Link>)}
            </Flex>
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start" gap="20px">
            <Heading fontSize={{base:'20px', md:'25px'}}>Support</Heading>
            <Flex flexDirection="column" alignItems="flex-start" gap="10px">
                {footerSupport.map(data => <Link key={data.id}>{data.label}</Link>)}
            </Flex>
        </Flex>
    </SimpleGrid>
  )
}

export default Footer3