import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  colors: {
    primary: "#4CAF4F",
    secondary: "#263238",
    info: "#2194f3",
    silver:"#F5F7FA",
    greyblue:"#ABBED1",
    white:"#ffffff",
    grey:'#717171'
  },
  components: {
    Text: {
      baseStyle: {
        color: "grey", 
      },
    },
    Heading: {
      sizes: {
        heading1: {
          fontSize: "64px", 
          fontWeight: "semibold", 
        },
        heading2: {
          fontSize: "36px", 
          fontWeight: "semibold", 
        },
        heading3: {
          fontSize: "28px", 
          fontWeight: "semibold", 
          lineHeight:'30px'
        },
        heading4: {
          fontSize: "20px", 
          fontWeight: "semibold", 
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "normal",
      },
      variants: {
        primary: {
          borderRadius: "md",
          color: "white",
          bg: "primary",
          paddingX:'25px',
          paddingY:'30px',
          _hover: {
            bg: "secondary",
          },
        },
        secondary: {
          color:'primary'
        }
       }
      },
  },
  
});

export default theme;
