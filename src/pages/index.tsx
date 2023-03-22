import Head from "next/head";
import { Text, Box, Flex, useColorModeValue } from "@chakra-ui/react";

import NavigationBar from "../components/NavigationBar";
import Layout from "@/components/Layout";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const bgMode = useColorModeValue (
    "url(/assets/bg-meteor.svg)",
    "url(/assets/bg-hexagon.svg)"
  );

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
        width="100vw"
        height="100vh"
      >
        <NavigationBar />
        <Layout>
          <AboutMe />

          {/* <Box  backgroundColor="yellow" >
            yo
          </Box> */}

        </Layout>
      </Box>
      
    </>
  );
};
