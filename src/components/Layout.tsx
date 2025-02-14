import { Flex, VStack } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
  return (
    <VStack marginX="auto" maxWidth="4xl">
      <Flex paddingX={4} direction="column" width="full" flex="auto">
        {children}
      </Flex>
    </VStack>
  )
}
