import { Box, Flex, SimpleGrid, Text, Link, Spacer, Divider, Image } from "@chakra-ui/react";

import Card from "@/components/sections/Card";
import MiniCard from "@/components/sections/MiniCard";

interface Props {
  name: string;
  link: string;
  org: {
    name: string,
    link: string,
  };
  description: string;
  thumbnail: string;
};

export default function Projects({ textPalette }: { textPalette: string }) {
  const projects = [
    {
      name: "bpftop",
      link: "https://github.com/Netflix/bpftop",
      org: {
        name: "NetflixOSS",
        link: "https://github.com/Netflix",
      },
      description: "TUI that provides real-time view of eBPF programs currently running on the host, with resource and performance statistics for each program.",
      thumbnail: "/assets/thumbnails/bpftop.png",
    },
    {
      name: "aya",
      link: "https://github.com/aya-rs/aya",
      org: {
        name: "aya-rs",
        link: "https://github.com/aya-rs",
      },
      description: "Rust library for building, loading, and attaching eBPF programs.",
      thumbnail: "/assets/thumbnails/aya.png",
    },
    {
      name: "kopium",
      link: "https://github.com/kube-rs/kopium",
      org: {
        name: "kube-rs",
        link: "https://github.com/kube-rs",
      },
      description: "CLI tool for extracting and translating CustomResourceDefinitions into Rust structs from a k8s cluster or YAML file.",
      thumbnail: "/assets/thumbnails/kube.png",
    },
  ];

  return (
    <Box id="open-source">
      <Card textColor={textPalette} title="Open-Source Contributions">
        <SimpleGrid 
          columns={[1, 3]}
          spacing={6}
          mb={2}
        >
          {projects.map((oss: Props) => (
            <Subsection key={oss.name} textPalette={textPalette} oss={oss} />
          ))}
        </SimpleGrid>

        <Link textStyle="body" href="https://github.com/tyrone-wu" isExternal mt="16px">
          🐝 Come checkout what else I&apos;m working on!
        </Link>
      </Card>
      <Box mb={52} />
    </Box>
    );
};

function Subsection({ textPalette, oss }: { textPalette: string, oss: Props }) {
  return (
    <MiniCard textPalette={textPalette}>
      <Flex direction="column" mx={6} my={6} align="center">
        <Image 
          src={oss.thumbnail} 
          alt="project thumbnail" 
          w="110px"
        />

        <Flex width="full" direction="column">
          <Link href={oss.link} isExternal>
            <Text as="u" textStyle="h3">
              {oss.name}
            </Text>
          </Link>
          <Spacer />
          <Link href={oss.org.link} isExternal textStyle="sub">
            {oss.org.name}
          </Link>
        </Flex>

        <Divider borderColor={textPalette} mt={1} mb={2} />

        <Text textStyle="sub" w="full">
          {oss.description}
        </Text>
      </Flex>
    </MiniCard>
  );
};