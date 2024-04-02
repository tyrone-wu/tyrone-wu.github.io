import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex, Image, Link, ListItem, SimpleGrid, Spacer, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";

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
  featPRs: PR[];
  bugfixPRs: PR[];
};

interface PR {
  id_links: {
    id: number,
    link: string,
  }[];
  description: string;
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
      featPRs: [
        {
          id_links: [
            { id: 22, link: "https://github.com/Netflix/bpftop/pull/22" }
          ],
          description: "Added search & filtering feature based on program `Name` or `Type` for more efficient navigation in the table view.",
        },
        {
          id_links: [
            { id: 26, link: "https://github.com/Netflix/bpftop/pull/26" }
          ],
          description: "Added tabular sorting feature in the table view for improved flexibility and data presentation of the entries.",
        },
      ],
      bugfixPRs: [],
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
      featPRs: [
        {
          id_links: [
            { id: 959, link: "https://github.com/aya-rs/aya/pull/959" }
          ],
          description: "Implemented `BPF_ENABLE_STATS` bpf syscall function to enable runtime statistics collection and benchmarking.",
        },
        {
          id_links: [
            { id: 1007, link: "https://github.com/aya-rs/aya/pull/1007" },
            { id: 1021, link: "https://github.com/aya-rs/aya/pull/1021" }
          ],
          description: "Added support for field availability/detection in the Info API for programs and maps, in consideration for older kernels.",
        },
      ],
      bugfixPRs: [
        {
          id_links: [
            { id: 912, link: "https://github.com/aya-rs/aya/pull/912" }
          ],
          description: "Limit `KProbe` & `UProbe` access to arguments only, and `KRetProbe` & `URetProbe` access to return value.",
        },
        {
          id_links: [
            { id: 917, link: "https://github.com/aya-rs/aya/pull/917" }
          ],
          description: "Fixed code-gen errors for Rust's FFI bindings to Linux UAPI in the build script and GHA workflow.",
        },
        {
          id_links: [
            { id: 963, link: "https://github.com/aya-rs/aya/pull/963" }
          ],
          description: "Fixed rustdoc build errors in v0.12.0 release.",
        },
      ],
    },
  ];

  return (
    <Box id="open-source">
      <Card textColor={textPalette} title="Open-Source Contributor">
        <SimpleGrid
          columns={[1, 2]}
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
  const title = useBreakpointValue(["Features/Enh.", "Features/Enhancements"]);

  return (
    <MiniCard textPalette={textPalette}>
      <Flex direction="column" mx={6} my={6} align="center">
        <Image
          src={oss.thumbnail}
          alt="project thumbnail"
          w="110px"
          loading="lazy"
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

        <Accordion mt={6} textStyle="sub" width="full" allowMultiple reduceMotion>
          {oss.featPRs.length > 0 && <PRSection title={title} prs={oss.featPRs} />}
          {oss.bugfixPRs.length > 0 && <PRSection title="Bug Fixes" prs={oss.bugfixPRs} />}
        </Accordion>
      </Flex>
    </MiniCard>
  );
};

function PRSection({ title, prs }: { title: string | undefined, prs: PR[] }) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box fontWeight="medium" textStyle="sub" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel>
        <UnorderedList>
          {prs.map(({ id_links, description }: PR) => (
            <ListItem key={id_links[0].id} mb={2}>
              {id_links.map((id_link, i) => (
                <Link key={id_link.id} href={id_link.link} isExternal fontWeight="medium">
                  {i > 0 && ","}
                  PR#{id_link.id}
                </Link>
              ))}
              : {description}
            </ListItem>
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
};