import { Box, SlideFade, useColorModeValue } from "@chakra-ui/react";

import Card from "../Card";
import Description from "./AboutDescription";
import Education from "./Education";

interface Props {
  textPalette: string;
};

export default function AboutMe({ textPalette }: Props) {
  return (
    <Box id="about">
      <SlideFade in transition={{ enter: { delay: 1.1 } }}>
        <Card textColor={textPalette} title="About Me">
          <Description />
          <Education />
        </Card>
      </SlideFade>
      <Box mb={52} />
    </Box>
  );
};