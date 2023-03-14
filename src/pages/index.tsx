import Head from "next/head";
import { Text, Box } from "@chakra-ui/react";

import NavigationBar from "../components/NavigationBar";
import Layout from "@/components/Layout";

export default function Home() {
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

      <NavigationBar />
      <Layout>
        <Box height={20}></Box>
        <Text>Me</Text>
      </Layout>
    </>
  );
};
