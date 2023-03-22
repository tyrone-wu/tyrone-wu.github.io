import { Box, Flex, useColorModeValue, Text, Divider } from "@chakra-ui/react";

interface Props {
  textColor: string;
  title: string;
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export default function Card({ textColor, title, children }: Props) {
  const bgColor = useColorModeValue("fallShade.1", "fall.2");
  const accentColor = useColorModeValue(textColor, "winter.0");

  return (
    <Box
      backgroundColor={bgColor}
      borderColor={accentColor}
      textColor={textColor}
      borderRightWidth={4}
    >
      <Flex 
        marginX={4}
        marginY={2}
        paddingBottom={4}
        direction="column"
      >
        <Text textStyle="h1" marginTop={2}>
          {title}
        </Text>

        <Divider borderColor={textColor} marginBottom={4} />

        {children}
      </Flex>
    </Box>
  );
};
