import { Box, Divider, Flex, HStack, Icon, IconButton, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";
import { Link } from "react-scroll";

interface Props {
  expanded: boolean;
  toggleMenu: () => void;
  iconColor: string;
}

// Toggle hamburger menu dropdown 
export default function Menu() {
  const sections = ["Home", "About", "Experience", "Open-Source", "Projects", "Skills"];

  const [expanded, setExpanded] = useState(false);
  function toggleMenu() {
    setExpanded((prevState) => !prevState);
  };

  const fillColor = useColorModeValue("textColor.0", "textColor.1");

  return (
    <>
      <HStack
        display={["none", "flex"]}
        justifyContent="flex-end"
        align="center"
        spacing={10}
        flex="auto"
      >
        <SectionsCollection sections={sections} textColor={fillColor} />
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
          <SectionsCollection sections={sections} textColor={fillColor} />
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

function SectionsCollection({ sections, textColor }: { sections: string[], textColor: string }) {
  return (
    <>
      {sections.map((title: string) => (
        <Link
          key={title}
          to={title.toLowerCase()}
          smooth={true}
          spy={true}
          offset={-88}
          duration={500}
          activeClass="navlink"
          color={textColor}
          href="#"
        >
          {title}
        </Link>
      ))}
    </>
  );
};