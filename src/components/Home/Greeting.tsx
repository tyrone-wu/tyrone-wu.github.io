import { Box, Flex,  SlideFade, Text } from "@chakra-ui/react";

interface Props {
  textPalette: string;
}

export default function Greeting({ textPalette }: Props) {
  return (
    <Flex 
      direction={["column", "row"]}
      backgroundColor="white"
    >
      <Name textPalette={textPalette} />

    </Flex>
  );
};

function Name({ textPalette }: Props) {
  return (
    <Box>
      <SlideFade in>
        <Text 
          textStyle="greet" 
          color={textPalette} 
        >
          ヾ(＾∇＾) Hey there! I&apos;m-
        </Text>
      </SlideFade>

      <Flex 
        textStyle="name" 
        direction="row" 
        marginTop={-2}
        marginBottom={4}
      >
        <SlideFade in transition={{ enter: { delay: 0.3 } }}>
          <Text 
            textStyle="inherit" 
            color={textPalette}
          >
            Tyrone
          </Text>
        </SlideFade>
        <SlideFade in transition={{ enter: { delay: 0.4 } }}>
          <Text 
            textStyle="inherit" 
            color={textPalette}
          >
            &nbsp;Wu
          </Text>
        </SlideFade>
      </Flex>
    </Box>
  );
};

function ProfilePicture() {
  return (
    <>
    </>
  );
};