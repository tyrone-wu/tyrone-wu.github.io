import { Flex, Image, Spacer, Text } from "@chakra-ui/react"

interface Props {
  textPalette: string
}

export default function Greeting({ textPalette }: Props) {
  return (
    <Flex direction={["column", "row"]} align="center">
      <Flex direction="column" align="center">
        <Text textStyle="greet" color={textPalette}>
          ヾ(＾∇＾) Hey there! I&apos;m-
        </Text>

        <Flex textStyle="name" direction="row" marginTop={-2} marginBottom={4}>
          <Text textStyle="inherit" color={textPalette}>
            Tyrone
          </Text>
          <Text textStyle="inherit" color={textPalette}>
            &nbsp;Wu
          </Text>
        </Flex>
      </Flex>

      <Spacer />
      <Image
        src="/assets/profile/profile.png"
        alt="Tyrone Wu"
        boxSize={["150px", "250px"]}
        objectFit="contain"
        mt={-2}
        mb={2}
      />
      <Spacer />
    </Flex>
  )
}
