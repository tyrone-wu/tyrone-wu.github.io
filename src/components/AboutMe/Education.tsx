import { Box, Flex, SlideFade, Text } from "@chakra-ui/react";

import Card from "../Card";

interface Props {
  textColor: string;
}

export default function Education({ textColor }: Props) {
  return (
    <Box marginTop={52}>
      <SlideFade in transition={{ enter: { delay: 1.1 } }}>
        <Card textColor={textColor} emoji="🎓" title="Education" >
          <Text>
            asdf
          </Text>
        </Card>
      </SlideFade>
    </Box>
  );
};