import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";

import NavigationBar from "@/components/NavBar/NavigationBar";
import Layout from "@/components/Layout";
import Landing from "@/components/sections/Home/Home";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
import Experience from "@/components/sections/Experience/Experience";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const background = "/assets/backgrounds/bg-hexagon.svg";
  const textPalette = useColorModeValue("fall.2", "warmWinter.1");

  return (
    <>
      <Head>
        <title>Tyrone Wu</title>
        <meta charSet="utf-8" />
        <meta name="title" content="Tyrone Wu" />
        <meta name="description" content="Tyrone Wu's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        backgroundImage={background}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="top"
      >
        <NavigationBar />
        <Layout>
          <Landing textPalette={textPalette} />
          <AboutMe textPalette={textPalette} />
          <Experience textPalette={textPalette} />
          <Projects textPalette={textPalette} />
          <Skills textPalette={textPalette} />
        </Layout>
      </Box>
      <Footer textPalette={textPalette} />
    </>
  );
};
