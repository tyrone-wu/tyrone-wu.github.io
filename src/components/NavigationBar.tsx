import { useState } from "react";
import { Button, Center, ChakraProvider, ColorModeScript, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import theme from "../styles/theme";

// interface Props {
//   expanded: boolean;
//   toggle: () => void;
// }

export default function NavigationBar() {
  // Toggle dark/light mode
  const { colorMode, toggleColorMode } = useColorMode();

  // Toggle hamburger menu dropdown 
  const [ expanded, setExpanded ] = useState(false);
  function toggleMenu() {
    setExpanded((prevState) => !prevState);
  };

  return (
    <>
      <ChakraProvider theme={theme} >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Center>
          <IconButton 
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} 
            onClick={toggleColorMode}
            aria-label="Color mode switcher"
          >
            Switch Mode
          </IconButton>

          {/* <HamburgerMenu expanded={expanded} toggle={toggleMenu} /> */}
        </Center>
      </ChakraProvider>
    </>
  );
};

// function HamburgerMenu({ expanded, toggle }: Props) {
//   return (
//     <>
//       <Button variant="outline" colorScheme="blue" onClick={toggle}>
//         {expanded ? 
//           <p>true</p>
//           :
//           <p>false</p>
//         }
//       </Button>
//     </>
//   );
// };