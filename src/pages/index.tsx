import Head from "next/head";
import PillPity from "pill-pity";

import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";

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
      <PillPity
        pattern="circuit-board"
        patternOpacity={0.4}
        backgroundColor="transparent"
        minH="100vh"
      >
        <Hero />
      </PillPity>
    </>
  );
};
