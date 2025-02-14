import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      backgroundColor: mode("background.0", "background.1")(props),
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
}

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
}

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
    fontSize: ["1.75rem", "2.00rem"],
    fontWeight: "bold",
  },
  h2: {
    fontSize: ["1.3rem", "1.6rem"],
    fontWeight: "bold",
  },
  h3: {
    fontSize: ["1.2rem", "1.3rem"],
    fontWeight: "medium",
    letterSpacing: "tight",
  },
  body: {
    fontSize: ["1rem", "1.1rem"],
    fontWeight: "normal",
    letterSpacing: "tight",
  },
  sub: {
    fontSize: ["0.9rem", "1rem"],
    fontWeight: "normal",
    letterSpacing: "tighter",
  },
  icon: {
    fontSize: ["0.8rem", "0.9rem"],
    fontWeight: ["bold", "medium"],
    letterSpacing: "tighter",
  },
}

const colors = {
  background: {
    0: "#FFFFFF",
    1: "#2C3639",
  },
  textColor: {
    0: "#3F4E4F",
    1: "#BDCDD6",
  },
  navBar: {
    0: "#FFFFFF",
    1: "#3F4E4F",
  },
  lightDarkIcon: {
    0: "#3F4E4F",
    1: "#F49D1A",
  },
  cardBackground: {
    0: "#FFFFFF",
    1: "#3F4E4F",
  },
  school: {
    0: "#9B2915",
    1: "#5096B9",
  },
  degree: {
    0: "#7E2111",
    1: "#69B6DD",
  },
}

const breakpoints = {
  sm: "46em",
  md: "52em",
  lg: "70em",
}

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
})

export default theme
