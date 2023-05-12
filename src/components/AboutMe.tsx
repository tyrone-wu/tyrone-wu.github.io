import { Box, SlideFade, useColorModeValue } from "@chakra-ui/react";

import Card from "./Card";
import About from "./AboutMe/About";
import Education from "./AboutMe/Education";

export default function AboutMe() {
  const textPalette = useColorModeValue("fall.2", "warmWinter.1");

  return (
    <Box id="about">
      <SlideFade in transition={{ enter: { delay: 1.1 } }}>
        <Card textColor={textPalette} title="About Me">
          <About />
          <Education />
        </Card>
      </SlideFade>
    </Box>
  );
};