import { Box, Grid } from "@chakra-ui/react"
import Footer2 from "./Footer2"
import Footer3 from "./Footer3"
import Footer4 from "./Footer4"

const Footer = () => {
  return (
    <Box bg="#263238" color="#fff">
      <Grid templateColumns={{base:'1fr',lg:'1fr 1fr 1fr'}} justifyContent="space-between" paddingX="20px" paddingY="60px" maxWidth={{base:'95%', md: '1200px'}} mx="auto" gap="50px">
        <Footer2/>
        <Footer3/>
        <Footer4/>
      </Grid>
    </Box>
  )
}

export default Footer
