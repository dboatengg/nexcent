import { Flex, Heading, Input, InputGroup, InputRightElement, Image } from "@chakra-ui/react"
import mail from '../assets/mail-icon.svg'

const Footer4 = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" gap="20px">
        <Heading fontSize="25px">Stay up to date</Heading>
        <InputGroup>
        <Input placeholder="Your email address"/>
        <InputRightElement children={<Image boxSize="20px" src={mail}/>}/>
        </InputGroup>
    </Flex>
  )
}

export default Footer4
