import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import Menu from "./Menu";
import ToggleTheme from "./ToggleTheme";

function NavigationBar() {
  const headerBGColor = useColorModeValue("fallShade.0", "fall.2");

  return (
    <Flex
      width="full"
      minHeight={[16, 20]}
      justify="space-between"
      zIndex="banner"
      position="fixed"
      boxShadow="lg"
      background={headerBGColor}
    >
      <Box mx="44px" />
      <Menu />
      <ToggleTheme />
    </Flex>
  );
};

export default NavigationBar;