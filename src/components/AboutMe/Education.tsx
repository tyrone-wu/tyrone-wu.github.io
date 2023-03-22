import { Box, Image, SlideFade, Text } from "@chakra-ui/react";

import Card from "../Card";

interface Props {
  textColor: string;
}

export default function Education({ textColor }: Props) {
  return (
    <Box marginTop={52}>
      <SlideFade in transition={{ enter: { delay: 1.1 } }}>
        <Card textColor={textColor} title="🎓 Education">
          <EducationBody />
        </Card>
      </SlideFade>
    </Box>
  );
};

function EducationBody() {
  return (
    <>
      
      <Image 
        src="/assets/NCSU_logo.svg" 
        alt="NCSU Logo" 
        padding={1}
        borderRadius="md"
        // backgroundColor="white"
        boxSize={12}
      />
      <Text>
        asdf
      </Text>
    </>
  );
};