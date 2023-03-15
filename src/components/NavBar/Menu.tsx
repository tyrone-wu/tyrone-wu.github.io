import { useState } from "react";
import { Box, Button, Divider, Flex, HStack, Icon, IconButton, useColorModeValue, VStack } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";

interface Props {
  expanded: boolean;
  toggleMenu: () => void;
  iconColor: string;
}

// Toggle hamburger menu dropdown 
export default function Menu() {
  const [ expanded, setExpanded ] = useState(false);
  function toggleMenu() {
    setExpanded((prevState) => !prevState);
  };

  const fillColor = useColorModeValue("winter.3", "fall.0");

  return (
    <>
      <HStack
        display={["none", "flex"]}
        justifyContent="flex-end"
        align="center"
        spacing={4}
        flex="auto"
      >
        <SectionsCollection textColor={fillColor} />
      </HStack>
      
      <Flex
        display={["flex", "none"]}
        direction="column"
        flex="auto"
      >
        <MenuIcon 
          expanded={expanded} 
          toggleMenu={toggleMenu} 
          iconColor={fillColor} 
        />

        <VStack
          display={[expanded ? "flex" : "none", "none"]}
          spacing={4}
          marginBottom={4}
        >
          <Divider 
            orientation="horizontal" 
            borderColor={fillColor} 
            borderWidth="thin"
          />
          <SectionsCollection textColor={fillColor} />
        </VStack>
      </Flex>
    </>
  );
};

function MenuIcon({ expanded, toggleMenu, iconColor }: Props) {
  return (
    <Box
      display="flex"
      flex="auto"
      justifyContent="flex-end"
    >
      <IconButton 
        marginY={[3, "auto"]}
        size="md"
        variant="ghost"
        aria-label="Toggle Menu"
        icon={expanded ? 
          <Icon as={CgChevronDown} boxSize={8} color={iconColor} />
          :
          <Icon as={BiMenu} boxSize={8} color={iconColor} />
        }
        onClick={toggleMenu}
      />
    </Box>
  );
};

function SectionsCollection({ textColor }: { textColor: string }) {
  return (
    <>
      <Section title="About Me" textColor={textColor} />
      <Section title="Experience" textColor={textColor} />
      <Section title="Projects" textColor={textColor} />
      <Section title="Technology" textColor={textColor} />
    </>
  );
};

function Section({ title, textColor }: { title: string, textColor: string }) {
  return (
    <Button
      variant="ghost"
      textColor={textColor}
    >
      {title}
    </Button>
  );
};