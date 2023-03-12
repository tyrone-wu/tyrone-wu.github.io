import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      background: mode("fall.0", "fall.3")(props),
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
};

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
};

const colors = {
  // https://colorhunt.co/palette/2c36393f4e4fa27b5cdcd7c9
  fall: {
    0: "#DCD7C9",
    1: "#A27B5C",
    2: "#3F4E4F",
    3: "#2C3639",
  },
  // https://colorhunt.co/palette/1a374d4068826998abb1d0e0
  winter: {
    0: "#B1D0E0",
    1: "#6998AB",
    2: "#406882",
    3: "#1A374D",
  },
  day: "#F49D1A",
  night: "#395B64",
};

const NavigationBar = defineStyleConfig({
  baseStyle: (props) => ({
    variants: {
      fall: {
        background: mode("fall.2", "fall.1")(props)
      },
    },
  }),
});

const theme = extendTheme({
  config: config,
  styles: styles,
  fonts: fonts,
  colors: colors,
  // components: {
  //   NavigationBar,
  // },
});

export default theme;