import { Image, Flex,  SlideFade, Text, Spacer } from "@chakra-ui/react";

interface Props {
  textPalette: string;
}

export default function Greeting({ textPalette }: Props) {
  return (
    <Flex 
      direction={["column", "row"]}
      // backgroundColor="white"
      align="center"
    >
      <Flex direction="column" align="center">
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
          <SlideFade in transition={{ enter: { delay: 0.35 } }}>
            <Text 
              textStyle="inherit" 
              color={textPalette}
            >
              &nbsp;Wu
            </Text>
          </SlideFade>
        </Flex>
      </Flex>

      <Spacer />
      <SlideFade in transition={{ enter: { delay: 0.4 } }}>
        <Image  
          src="/assets/profile_hex.png"
          alt="Tyrone Wu"
          boxSize={["150px", "250px"]}
          objectFit="contain"
          mt={-2}
          mb={2}
        />
      </SlideFade>
      <Spacer />
    </Flex>
  );
};