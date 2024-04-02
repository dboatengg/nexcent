import { Box } from "@chakra-ui/react";
import AudienceSuitability from "./components/AudienceSuitability";
import Client from "./components/Client";

import Navbar from "./components/Navbar";
import Pixel from "./components/Pixel";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      
      <Box p="20px" maxWidth="1200px" mx="auto">
        <Client />
        <AudienceSuitability />
        <Pixel/>
        <Stats/>
      </Box>
    </>
  );
}

export default App;
