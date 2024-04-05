import { Box } from "@chakra-ui/react";
import AudienceSuitability from "./components/AudienceSuitability";
import Client from "./components/Client";

import Navbar from "./components/Navbar";
import Pixel from "./components/Pixel";
import Stats from "./components/Stats";
import FooterDesginGuide from "./components/FooterDesginGuide";

function App() {
  return (
    <>
      <Navbar />
      
      <Box p="20px" maxWidth="1200px" mx="auto">
        <Client />
        <AudienceSuitability />
        <Pixel/>
      </Box>
      <Stats/>
      <Box p="20px" maxWidth="1200px" mx="auto">
          <FooterDesginGuide/>
      </Box>
    </>
  );
}

export default App;
