import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import { iconMap } from "@/components/data/icons"
import Card from "@/components/sections/Card"
import MiniCard from "@/components/sections/MiniCard"

interface Props {
  name: string
  description: string
  thumbnail: string
  stack: string[]
  link: string
}

export default function Projects({ textPalette }: { textPalette: string }) {
  const projects = [
    {
      name: "K8s Cluster Deployment for Footware Inventory",
      description:
        "An automated kubernetes, multi-node cluster deployment for an inventory web app.",
      thumbnail: "/assets/thumbnails/k8s-deploy.png",
      stack: [
        "Ansible",
        "AWS EC2",
        "Docker",
        "Kubernetes",
        "Locust",
        "microk8s",
        "Terraform",
      ],
      link: "https://github.com/tyrone-wu/footwear-webstore-cloudops",
    },
    {
      name: "Research Exchange",
      description:
        "A Stack Exchange-like web app that hosting a crowd-reviewing platform for research publications.",
      thumbnail: "/assets/thumbnails/research-exchange.png",
      stack: [
        "Java",
        "Micronaut",
        "Next.js",
        "Oracle Cloud",
        "Oracle DB",
        "Typescript",
        "React",
      ],
      link: "https://github.com/tyrone-wu/ResearchExchange",
    },
    {
      name: "One Wallet",
      description:
        "A web app that centralizes a user's personal finance information with modular and customizable components/interface.",
      thumbnail: "/assets/thumbnails/one-wallet.png",
      stack: ["CSS", "Flask", "HTML", "Python", "React", "Typescript"],
      link: "https://github.com/SelenaChen123/OneWallet",
    },
    // {
    //   name: "Deployment & Monitoring Pipeline Tool",
    //   description: "An Ansible wrapper CLI tool that conforms to GitHub Action's yaml specification for deploying and monitoring locally hosted web apps.",
    //   thumbnail: "/assets/thumbnails/pipeline-tool.png",
    //   stack: [ "Ansible", "Bash/Shell", "Javascript", "Node.js", "Redis", "Ubuntu", "VirtualBox" ],
    //   link: "https://github.com/tyrone-wu/deploy-monitor-pipline-tool",
    // },
  ]

  const iconBGColor = useColorModeValue("cardBackground.0", "cardBackground.1")

  return (
    <Box id="projects">
      <Card textColor={textPalette} title="Projects">
        <SimpleGrid columns={[1, 2]} spacing={6} mb={2}>
          {projects.map((project: Props, i: number) => (
            <ProjectSection
              key={`${i}` + "-prj"}
              textPalette={textPalette}
              project={project}
              iconBGColor={iconBGColor}
            />
          ))}
        </SimpleGrid>

        <Link
          textStyle="body"
          href="https://github.com/tyrone-wu"
          isExternal
          mt="16px"
        >
          More on my GitHub!😋
        </Link>
      </Card>
      <Box mb={52} />
    </Box>
  )
}

function ProjectSection({
  textPalette,
  project,
  iconBGColor,
}: {
  textPalette: string
  project: Props
  iconBGColor: string
}) {
  return (
    <MiniCard textPalette={textPalette}>
      <Flex direction="column" align="center" mx={6} my={2}>
        <Link href={project.link} isExternal w="full">
          <Text textStyle="h3" mt={2}>
            {project.name}
          </Text>
        </Link>

        <Divider borderColor={textPalette} mt={1} mb={2} />

        <Text
          textStyle="sub"
          style={{ textDecoration: "none" }}
          w="full"
          mb={4}
        >
          {project.description}
        </Text>
        <Box borderWidth="1px" borderColor={textPalette}>
          <Image
            src={project.thumbnail}
            alt="project thumbnail"
            w={["230px", "330px"]}
            objectFit="contain"
            loading="lazy"
          />
        </Box>

        <Divider borderColor={textPalette} mt={4} mb={2} />

        <Flex
          direction="row"
          wrap="wrap"
          gridGap="10px"
          columnGap="6px"
          justify="center"
          mb={2}
        >
          {project.stack.map((tech: string, i: number) => (
            <TechIcon
              key={`${i}` + "-" + `${tech}`}
              tech={tech}
              textPalette={textPalette}
              iconBGColor={iconBGColor}
            />
          ))}
        </Flex>
      </Flex>
    </MiniCard>
  )
}

function TechIcon({
  tech,
  textPalette,
  iconBGColor,
}: {
  tech: string
  textPalette: string
  iconBGColor: string
}) {
  const stack = iconMap.get(tech)
  return (
    <Flex
      direction="row"
      borderRadius="none"
      borderWidth="1px"
      borderColor={textPalette}
      backgroundColor={iconBGColor}
      h="38px"
    >
      <Center mx="6px">
        <Image src={stack?.icon} alt={tech} w="20px" mr="4px" loading="lazy" />
        <Text textStyle="icon">{tech}</Text>
      </Center>
    </Flex>
  )
}
