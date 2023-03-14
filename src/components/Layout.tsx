import { useColorModeValue, VStack } from "@chakra-ui/react";

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
      style={{ backgroundImage: bgMode }}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      width="100vw"
      height="100vh"
    >
      {children}
    </VStack>
  );
};