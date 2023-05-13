import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";

import NavigationBar from "../components/NavBar/NavigationBar";
import Layout from "@/components/Layout";
import Landing from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Experience from "../components/Experience/Experience";

export default function Home() {
  const bgMode = useColorModeValue (
    "url(/assets/bg-meteor.svg)",
    "url(/assets/bg-hexagon.svg)"
  );
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
        backgroundImage={bgMode}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        // width="calc(100vw)"
        // height="calc(100vh)"
      >
        <NavigationBar />
        <Layout>
          <Landing textPalette={textPalette} />
          <AboutMe textPalette={textPalette} />
          <Experience textPalette={textPalette} />
        </Layout>
      </Box>
      
    </>
  );
};
