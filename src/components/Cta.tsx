
import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { HiMiniArrowLongRight } from "react-icons/hi2"


const Cta = () => (
  <Box bg="silver" paddingY="30px" marginTop="15px">
    <Box p="20px" maxWidth="1200px" mx="auto">
      <Flex flexDirection="column" gap="30px" alignItems='center' maxWidth={{md:'50%'}} mx="auto">
        <Heading fontSize={{base:'32px',md:'50px'}} textAlign='center'>Pellentesque suscipit fringilla libero eu.</Heading>
        <Button rightIcon={<HiMiniArrowLongRight/>} variant='primary'>Get a Demo</Button>
      </Flex>
    </Box>
  </Box>
)

export default Cta;