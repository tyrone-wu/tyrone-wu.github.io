import { ChakraProvider } from "@chakra-ui/react"

import theme from "../styles/theme"

interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function Chakra({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
