import { Flex, useColorModeValue, VStack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  const bgMode = useColorModeValue (
    "url(/assets/bg-meteor.svg)",
    "url(/assets/bg-hexagon.svg)"
  );

  return (
    <VStack
      marginX="auto"
      maxWidth="5xl"
    >
      <Flex
        paddingX={4}
        direction="column"
        width="full"
        flex="auto"
      >
        {children}
      </Flex>
    </VStack>
  );
};