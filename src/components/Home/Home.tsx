import { Box } from "@chakra-ui/react";

import Greeting from "./Greeting";
import Links from "./Links";

interface Props {
  textPalette: string;
};

export default function Home({ textPalette }: Props) {
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