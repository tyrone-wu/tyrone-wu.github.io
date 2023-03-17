import { Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "./NavBar/Logo";

import Menu from "./NavBar/Menu";
import ToggleTheme from "./NavBar/ToggleTheme";

function NavigationBar() {
  const headerBGColor = useColorModeValue("fall.0", "fall.2");

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
      <Logo />
      <Menu />
      <ToggleTheme />
    </Flex>
  );
};

export default NavigationBar;