import { Box, useColorModeValue, Image, Flex } from "@chakra-ui/react";

import Greeting from "./Home/Greeting";
import Links from "./Home/Links";

export default function Home() {
  const textPalette = useColorModeValue("fall.2", "warmWinter.1");

  return (
    <Box
      id="home"
      paddingTop={[28, 40]}
    >
      <Greeting textPalette={textPalette} />
      <Links textColor={textPalette} />
      <Box mb={52} />
    </Box>
  );
};