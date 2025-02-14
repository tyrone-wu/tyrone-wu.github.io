import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react"

import Card from "@/components/sections/Card"
import MiniCard from "@/components/sections/MiniCard"

interface Props {
  name: string
  link: string
  org: {
    name: string
    link: string
  }
  description: string
  thumbnail: string
  featPRs: PR[]
  bugfixPRs: PR[]
}

interface PR {
  id_links: {
    id: string
    link: string
  }[]
  description: string
  additional: undefined | string
}

export default function Projects({ textPalette }: { textPalette: string }) {
  const projects = [
    {
      name: "aya",
      link: "https://github.com/aya-rs/aya",
      org: {
        name: "aya-rs",
        link: "https://github.com/aya-rs",
      },
      description:
        "Rust library for building, loading, and attaching eBPF programs.",
      thumbnail: "/assets/thumbnails/aya.png",
      featPRs: [
        {
          id_links: [
            { id: "PR#959", link: "https://github.com/aya-rs/aya/pull/959" },
          ],
          description:
            "Implemented `BPF_ENABLE_STATS` bpf syscall function to enable runtime statistics collection and benchmarking.",
          additional: undefined,
        },
        {
          id_links: [
            { id: "PR#1007", link: "https://github.com/aya-rs/aya/pull/1007" },
            { id: "PR#1021", link: "https://github.com/aya-rs/aya/pull/1021" },
          ],
          description:
            "Added support for field availability/detection in the Info API for programs and maps, in consideration for older kernels.",
          additional: undefined,
        },
      ],
      bugfixPRs: [
        {
          id_links: [
            { id: "PR#912", link: "https://github.com/aya-rs/aya/pull/912" },
          ],
          description:
            "Limit `KProbe` & `UProbe` access to arguments only, and `KRetProbe` & `URetProbe` access to return value.",
          additional: undefined,
        },
        {
          id_links: [
            { id: "PR#917", link: "https://github.com/aya-rs/aya/pull/917" },
          ],
          description:
            "Fixed code-gen errors for Rust's FFI bindings to Linux UAPI in the build script and GHA workflow.",
          additional: undefined,
        },
        {
          id_links: [
            { id: "PR#963", link: "https://github.com/aya-rs/aya/pull/963" },
          ],
          description: "Fixed rustdoc build errors in v0.12.0 release.",
          additional: undefined,
        },
      ],
    },
    {
      name: "BPF Subsystem",
      link: "https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/",
      org: {
        name: "Linux Kernel",
        link: "https://git.kernel.org/",
      },
      description: "The BPF subsystem of the Linux kernel.",
      thumbnail: "/assets/thumbnails/linux_ebpf.png",
      featPRs: [],
      bugfixPRs: [
        {
          id_links: [
            {
              id: "4deecd",
              link: "https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/commit/?id=4deecdd29cf2",
            },
            {
              id: "4538a3",
              link: "https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/commit/?id=4538a38f654a",
            },
          ],
          description:
            "Fixed unpopulated `name_len` field in `bpf_link_info.perf_event` for kprobe, uprobe, and tracepoint.",
          additional:
            "https://lore.kernel.org/bpf/20241011193252.178997-1-wudevelops@gmail.com/T/#u",
        },
        {
          id_links: [
            {
              id: "ad6b5b",
              link: "https://git.kernel.org/bpf/bpf/c/ad6b5b6ea9b7",
            },
            {
              id: "b836cb",
              link: "https://git.kernel.org/bpf/bpf/c/b836cbdf3b81",
            },
          ],
          description:
            "Fixed unpopulated `uprobe_multi.path_size` field in `bpf_link_info` when buffer and length are unset.",
          additional:
            "https://lore.kernel.org/bpf/CABVU1kWEHkt+z1c0vu1bXMn81iY8rDjwU=B6KPi2dPVvgeZUPw@mail.gmail.com/T/#u",
        },
        {
          id_links: [
            {
              id: "92f371",
              link: "https://git.kernel.org/bpf/bpf/c/92f3715e1eba",
            },
            {
              id: "2aa587",
              link: "https://git.kernel.org/bpf/bpf/c/2aa587fd6659",
            },
          ],
          description:
            "Correctly populate `netfilter.flags` field in `bpf_link_info` when `BPF_F_NETFILTER_IP_DEFRAG` is specified in attachment.",
          additional:
            "https://lore.kernel.org/bpf/20241011193252.178997-1-wudevelops@gmail.com/T/#u",
        },
      ],
    },
    {
      name: "bpftop",
      link: "https://github.com/Netflix/bpftop",
      org: {
        name: "NetflixOSS",
        link: "https://github.com/Netflix",
      },
      description:
        "TUI that provides real-time view of eBPF programs currently running on the host, with resource and performance statistics for each program.",
      thumbnail: "/assets/thumbnails/bpftop.png",
      featPRs: [
        {
          id_links: [
            { id: "PR#22", link: "https://github.com/Netflix/bpftop/pull/22" },
          ],
          description:
            "Added search & filtering feature based on program `Name` or `Type` for more efficient navigation in the table view.",
          additional: undefined,
        },
        {
          id_links: [
            { id: "PR#26", link: "https://github.com/Netflix/bpftop/pull/26" },
          ],
          description:
            "Added tabular sorting feature in the table view for improved flexibility and data presentation of the entries.",
          additional: undefined,
        },
      ],
      bugfixPRs: [],
    },
  ]

  return (
    <Box id="open-source">
      <Card textColor={textPalette} title="Open-Source Contributor">
        <SimpleGrid columns={1} spacing={6} mb={2}>
          {projects.map((oss: Props) => (
            <Subsection key={oss.name} textPalette={textPalette} oss={oss} />
          ))}
        </SimpleGrid>

        <Link
          textStyle="body"
          href="https://github.com/tyrone-wu"
          isExternal
          mt="16px"
        >
          🐝 Come checkout what else I&apos;m working on!
        </Link>
      </Card>
      <Box mb={52} />
    </Box>
  )
}

function Subsection({ textPalette, oss }: { textPalette: string; oss: Props }) {
  const title = useBreakpointValue(["Features/Enh.", "Features/Enhancements"])

  return (
    <MiniCard textPalette={textPalette}>
      <Flex direction="column" mx={6} my={6} align="center">
        <Stack direction={["column", "row"]} w="full">
          <Box alignSelf="center" mr={[0, 2]}>
            <Image
              src={oss.thumbnail}
              alt="project thumbnail"
              maxHeight="110px"
              loading="lazy"
            />
          </Box>

          <Flex direction="column" w="full">
            <Link href={oss.link} isExternal>
              <Text as="u" textStyle="h3">
                {oss.name}
              </Text>
            </Link>
            <Link href={oss.org.link} isExternal textStyle="sub">
              {oss.org.name}
            </Link>

            <Divider borderColor={textPalette} mt={1} mb={2} />

            <Text textStyle="sub" w="full">
              {oss.description}
            </Text>
          </Flex>
        </Stack>

        <Accordion
          mt={4}
          textStyle="sub"
          border="thick"
          width="full"
          allowMultiple
          reduceMotion
        >
          {oss.featPRs.length > 0 && (
            <PRSection
              textPalette={textPalette}
              title={title}
              prs={oss.featPRs}
            />
          )}
          {oss.bugfixPRs.length > 0 && (
            <PRSection
              textPalette={textPalette}
              title="Bug Fixes"
              prs={oss.bugfixPRs}
            />
          )}
        </Accordion>
      </Flex>
    </MiniCard>
  )
}

function PRSection({
  textPalette,
  title,
  prs,
}: {
  textPalette: string
  title: string | undefined
  prs: PR[]
}) {
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
          {prs.map(({ id_links, description, additional }: PR, j) => (
            <ListItem key={`${title ? title : "pr"}` + j} mb={4}>
              <Text fontWeight="medium" as="u">
                {"Links"}
              </Text>
              {": "}
              {id_links.map((id_link, i) => (
                <>
                  {i > 0 && ", "}
                  <Link key={id_link.id} href={id_link.link} isExternal>
                    {id_link.id}
                  </Link>
                </>
              ))}

              <Text mt={1}>{description}</Text>
              {additional && (
                <Link
                  href={additional}
                  isExternal
                  textStyle="icon"
                  fontWeight="medium"
                >
                  <Text mt={2}>{additional}</Text>
                </Link>
              )}
              <Divider borderColor={textPalette} mt={2} />
            </ListItem>
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  )
}
