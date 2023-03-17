import { Flex, useColorModeValue } from "@chakra-ui/react";

import Greeting from "./AboutMe/Greeting";
import Links from "./AboutMe/Links";

export default function AboutMe() {
  const textPalette = useColorModeValue("fall.2", "warmWinter.1");


  return (
    <Flex
      paddingX={4}
      paddingTop={[28, 40]}
      direction="column"
      width="full"
      flex="auto"
    >
      <Greeting textPalette={textPalette} />
      <Links textColor={textPalette} />
    </Flex>
  );
};