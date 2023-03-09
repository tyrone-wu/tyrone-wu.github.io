import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

// const config: ThemeConfig = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

// const styles = {
//   global: (props: StyleFunctionProps) => ({
//     body: {
//       bg: mode("base.3", "base.03")(props),
//     },
//   }),
// };

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
};

const colors = {
  base: {
    "03": "#002b36",
    "02": "#073642",
    "01": "#586e75",
    "00": "#657b83",
    0: "#839496",
    1: "#93a1a1",
    2: "#eee8d5",
    3: "#fdf6e3",
  },
};

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("base.1", "base.01")(props),
      },
    }),
  },
  fonts: fonts,
  colors: colors,
});

export default theme;