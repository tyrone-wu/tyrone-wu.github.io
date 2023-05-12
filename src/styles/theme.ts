import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      backgroundColor: mode("fall.0", "fall.3")(props),
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
};

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
};

const textStyles = {
  name: {
    fontSize: ["3rem", "4.5rem"],
    fontWeight: "black",
  },
  greet: {
    fontSize: ["1rem", "1.25rem"],
    fontWeight: "medium",
  },
  h1: {
    fontSize: ["1.75rem", "2.25rem"],
    fontWeight: "bold",
  },
  h2: {
    fontSize: ["1.3rem", "1.6rem"],
    fontWeight: "bold",
  },
  h3:{
    fontSize: ["1.2rem", "1.3rem"],
    fontWeight: "medium",
  },
  body: {
    fontSize: ["1rem", "1.1rem"],
    fontWeight: "normal",
    letterSpacing: "tight",
  },
};

const colors = {
  fallShade: {
    0: "#DFDBCE",
    1: "#C6C1B4",
  },
  warmWinter: {
    0: "#EEE9DA",
    1: "#BDCDD6",
    2: "#93BFCF",
    3: "#6096B4",
  },
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

const breakpoints = {
  sm: "46em",
  md: "52em",
  lg: "70em",
};

// const NavigationBar = defineStyleConfig({
//   baseStyle: (props: StyleFunctionProps) => ({
//     background: mode("fall.0", "fall.2")(props),
//   }),
// });

const theme = extendTheme({
  config: config,
  styles: styles,
  fonts: fonts,
  textStyles: textStyles,
  colors: colors,
  breakpoints: breakpoints,
  // components: {
  //   NavigationBar,
  // },
});

export default theme;