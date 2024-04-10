import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import { HiMiniArrowLongRight } from "react-icons/hi2"
import blog from "../data/blog"

const Blog = () => {
  return (
    <Box paddingY="40px">
        <Flex flexDirection="column" gap="10px" maxWidth={{md:"60%"}} textAlign='center' mx="auto" marginBottom="20px">
            <Heading>Caring is the new marketing</Heading>
            <Text>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</Text>
        </Flex>
        <Flex flexDirection={{base:'column',md:'row'}} gap={{base:'30px', md:'20px'}} alignItems="stretch">
            {blog.map(data=>(
            <Box bg="silver" key={data.id} minHeight="200px" display="flex" flexDirection="column" justifyContent="space-between">
                <Image src={data.id === 1 ? blog1: data.id===2 ? blog2: data.id === 3 ? blog3:''}/>
                <Box textAlign="center" paddingY="20px" paddingX="30px" boxShadow="md">
                    <Text>{data.text}</Text>
                    <Button variant='secondary' rightIcon={<HiMiniArrowLongRight />}>{data.btnText}</Button>
                </Box>
            </Box>

            ))}
        </Flex>
    </Box>
  )
}

export default Blog