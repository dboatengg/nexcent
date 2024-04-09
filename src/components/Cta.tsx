
import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { HiMiniArrowLongRight } from "react-icons/hi2"


const Cta = () => (
  <Box bg="silver" paddingY="30px">
    <Flex flexDirection="column" gap="30px" alignItems='center' maxWidth='50%' mx="auto">
      <Heading textAlign='center'>Pellentesque suscipit fringilla libero eu.</Heading>
      <Button rightIcon={<HiMiniArrowLongRight/>} variant='primary'>Get a Demo</Button>
    </Flex>
  </Box>
)

export default Cta