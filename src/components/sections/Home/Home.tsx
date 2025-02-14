import { Box } from "@chakra-ui/react"

import Greeting from "./Greeting"
import Links from "./Links"
import About from "./AboutMe"

interface Props {
  textPalette: string
}

export default function Home({ textPalette }: Props) {
  return (
    <Box id="home" paddingTop={[28, 40]}>
      <Greeting textPalette={textPalette} />
      <Links textColor={textPalette} />
      <About textPalette={textPalette} />
      <Box mb={52} />
    </Box>
  )
}
