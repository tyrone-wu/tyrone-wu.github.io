import { Box, Flex, SlideFade } from "@chakra-ui/react";

import Card from "@/components/sections/Card";
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
          <Flex direction="column" gap={6} mb={2}>
            <Description />
            <Education textPalette={textPalette} />
          </Flex>
        </Card>
      </SlideFade>
      <Box mb={52} />
    </Box>
  );
};