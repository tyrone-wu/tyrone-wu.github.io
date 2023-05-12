import { Icon, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

// Toggle dark/light mode
export default function ToggleTheme() {
  const { toggleColorMode } = useColorMode();
  const modeColor = useColorModeValue("night", "day");
  const ModeIcon = useColorModeValue(
    <Icon as={BsMoonStarsFill} boxSize={6} color="night" />,
    <Icon as={FaSun} boxSize={7} color="day" />
  );

  return (
    <IconButton 
      marginX={6}
      marginY={[3, "auto"]}
      size="md"
      borderColor={modeColor}
      borderRadius="none"
      variant="outline"
      icon={ModeIcon}
      onClick={toggleColorMode}
      aria-label="Toggle Theme"
    />
  );
};