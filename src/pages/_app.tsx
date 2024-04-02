import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "../styles/ActiveLink.css";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
