import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
// import { ArrowForwardIcon } from "@chakra-ui/icons"
import { HiMiniArrowLongRight } from "react-icons/hi2"

const Blog = () => {
  return (
    <Box>
        <Box maxWidth="60%" textAlign='center' mx="auto" marginBottom="20px">
            <Heading>Caring is the new marketing</Heading>
            <Text>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</Text>
        </Box>
        <Flex flexDirection={{base:'column',md:'row'}} justifyContent="space-between" gap="30px" alignItems="center">
            <Box>
                <Image src={blog1}/>
                <Box bg="silver" textAlign="center" paddingY="20px" paddingX="30px" maxWidth="300px" boxShadow="md">
                    <Text>Creating Streamlined Safeguarding Processes with OneRen</Text>
                    <Button variant='secondary' rightIcon={<HiMiniArrowLongRight />}>Read more</Button>
                </Box>
            </Box>
            <Box>
                <Image src={blog2}/>
                <Box>
                    <Text>Creating Streamlined Safeguarding Processes with OneRen</Text>
                    <Button variant='secondary' rightIcon={<HiMiniArrowLongRight />}>Read more</Button>
                </Box>
            </Box>
            <Box >
                <Image src={blog3}/>
                <Box>
                    <Text>Creating Streamlined Safeguarding Processes with OneRen</Text>
                    <Button variant='secondary' rightIcon={<HiMiniArrowLongRight />}>Read more</Button>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Blog