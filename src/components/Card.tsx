import { Box, Flex, useColorModeValue, Text, Divider } from "@chakra-ui/react";

interface Props {
  textColor: string;
  emoji: string;
  title: string;
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export default function Card({ textColor, emoji, title, children }: Props) {
  const bgColor = useColorModeValue("fallShade.1", "fall.2");
  const accentColor = useColorModeValue(textColor, "winter.0");

  return (
    <Box
      backgroundColor={bgColor}
      borderRadius="lg"
      borderColor={accentColor}
      textColor={textColor}
      borderRightWidth={4}
    >
      <Flex 
        marginX={4}
        marginY={2}
        paddingBottom={2}
        direction="column"
      >
        <Text textStyle="h1" marginTop={2}>
          {emoji} {title}
        </Text>

        <Divider borderColor={textColor} marginBottom={4} />

        {children}
      </Flex>
    </Box>
  );
};
