import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";
import "../styles/ActiveLink.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
