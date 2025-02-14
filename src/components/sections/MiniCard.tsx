import { Box, useColorModeValue } from "@chakra-ui/react"

interface Props {
  textPalette: string
  children: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function MiniCard({ textPalette, children }: Props) {
  const sectionBGColor = useColorModeValue("background.0", "background.1")

  return (
    <Box
      width="full"
      background={sectionBGColor}
      borderColor={textPalette}
      borderWidth={1}
      borderRightWidth={4}
    >
      {children}
    </Box>
  )
}
