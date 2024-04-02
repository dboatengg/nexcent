import { Box } from "@chakra-ui/react";
import AudienceSuitability from "./components/AudienceSuitability";
// import Client from "./components/Client";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      
      <Box p="20px" maxWidth="1200px" mx="auto">
        <AudienceSuitability />
        {/* <Client /> */}
      </Box>
    </>
  );
}

export default App;
