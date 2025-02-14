import {
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsMoonStarsFill } from "react-icons/bs"
import { FaSun } from "react-icons/fa"

// Toggle dark/light mode
export default function ToggleTheme() {
  const { toggleColorMode } = useColorMode()
  const iconColor = useColorModeValue("lightDarkIcon.0", "lightDarkIcon.1")
  const ModeIcon = useColorModeValue(
    <Icon as={BsMoonStarsFill} boxSize={6} color={iconColor} />,
    <Icon as={FaSun} boxSize={7} color={iconColor} />,
  )

  return (
    <IconButton
      marginX={6}
      marginY={[3, "auto"]}
      size="md"
      borderColor={iconColor}
      borderRadius="none"
      variant="outline"
      icon={ModeIcon}
      onClick={toggleColorMode}
      aria-label="Toggle Theme"
    />
  )
}
