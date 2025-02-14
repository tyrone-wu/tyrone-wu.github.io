import { Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react"

interface Props {
  textColor: string
  title: string
  children: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function Card({ textColor, title, children }: Props) {
  const bgColor = useColorModeValue("cardBackground.0", "cardBackground.1")

  return (
    <Box
      backgroundColor={bgColor}
      borderColor={textColor}
      textColor={textColor}
      borderWidth={1}
      borderRightWidth={4}
    >
      <Flex marginX={6} marginY={2} paddingBottom={4} direction="column">
        <Text textStyle="h1" marginTop={4}>
          {title}
        </Text>

        <Divider borderColor={textColor} marginBottom={4} />

        {children}
      </Flex>
    </Box>
  )
}
