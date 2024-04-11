import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
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
      variants: {
        footer: {
          color: "#fff",
        },
      },
      baseStyle: {
        color: "grey", 
      },
    },
    Heading: {
      color:'red',
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
          paddingX:'23px',
          paddingY:'26px',
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
