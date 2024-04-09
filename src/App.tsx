import { Box } from "@chakra-ui/react";
import AudienceSuitability from "./components/AudienceSuitability";
import Client from "./components/Client";

import Navbar from "./components/Navbar";
import Pixel from "./components/Pixel";
import Stats from "./components/Stats";
import FooterDesginGuide from "./components/FooterDesginGuide";
import Customers from "./components/Customers";
import Blog from "./components/Blog";
import Cta from "./components/Cta";

function App() {
  return (
    <>
      <Navbar />
      <Box paddingX="20px" maxWidth="1200px" mx="auto">
        <Client />
        <AudienceSuitability />
        <Pixel/>
      </Box>
      <Stats/>
      <Box p="20px" maxWidth="1200px" mx="auto">
        <FooterDesginGuide/>
      </Box>
      <Customers/>
      <Box p="20px" maxWidth="1200px" mx="auto">
        <Blog/>
      </Box>
      <Cta/>
    </>
  );
}

export default App;
