import { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

// Toggle hamburger menu dropdown 
export default function HamburgerMenu() {
  const [ expanded, setExpanded ] = useState(false);
  function toggleMenu() {
    setExpanded((prevState) => !prevState);
  };

  return (
    <Flex>
      <Button>
        About Me
      </Button>
      <Button>
        About Me
      </Button>

      <Button 
        marginX={6}
        marginY="auto"
        variant="outline" 
        colorScheme="blue" 
        onClick={toggleMenu}
      >
        {expanded ? 
          <CloseIcon />
          :
          <HamburgerIcon />
        }
      </Button>
    </Flex>
  );
};