import { Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Logo from "./NavBar/Logo";

import Menu from "./NavBar/Menu";
import ToggleTheme from "./NavBar/ToggleTheme";

function NavigationBar() {
  const headerBGColor = useColorModeValue("fall.0", "fall.2");

  return (
    <Flex
      width="full"
      height={16}
      zIndex="banner"
      position="fixed"
      boxShadow="lg"
      background={headerBGColor}
    >
      <Logo />
      <Spacer />
      <Menu />
      <ToggleTheme />
    </Flex>
  );
};

export default NavigationBar;