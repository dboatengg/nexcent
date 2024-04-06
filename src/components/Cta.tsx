import { Box, Button, Flex, Heading } from "@chakra-ui/react"

const Cta = () => {
  return (
    <Box bg="silver">
        <Flex flexDirection="column" gap="30px" alignItems='center' maxWidth='400px' mx="auto">
            <Heading textAlign='center'>Pellentesque suscipit fringilla libero eu.</Heading>
            <Button variant='primary'>Get a Demo</Button>
        </Flex>
    </Box>
  )
}

export default Cta