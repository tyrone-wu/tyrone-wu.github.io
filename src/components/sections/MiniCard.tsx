import { Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  textPalette: string;
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export default function MiniCard({ textPalette, children }: Props) {
  const sectionBGColor = useColorModeValue("fall.0", "fall.3");
  return (
    <Box 
      width="full" 
      background={sectionBGColor}
      borderColor={textPalette}
      borderRightWidth={4}
    >
      {children}
    </Box>
  );
};