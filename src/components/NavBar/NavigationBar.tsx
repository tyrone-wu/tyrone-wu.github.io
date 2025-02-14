import { Box, Flex, useColorModeValue } from "@chakra-ui/react"

import Menu from "./Menu"
import ToggleTheme from "./ToggleTheme"

function NavigationBar() {
  const navBarColor = useColorModeValue("navBar.0", "navBar.1")

  return (
    <Flex
      width="full"
      minHeight={[16, 20]}
      justify="space-between"
      zIndex="banner"
      position="fixed"
      boxShadow="lg"
      background={navBarColor}
    >
      <Box mx="44px" />
      <Menu />
      <ToggleTheme />
    </Flex>
  )
}

export default NavigationBar
