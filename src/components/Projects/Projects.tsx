import { Box, Divider, Flex, Image, Link, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

import Card from "../Card";

interface TechIconProps {
  tech: string;
  icon: string;
};

interface Props {
  name: string;
  description: string;
  thumbnail: string;
  stack: TechIconProps[];
  link: string;
};

export default function Projects({ textPalette }: { textPalette: string }) {
  const iconPath = "/assets/icons/";
  const projects = [
    {
      name: "K8s Cluster Deployment for Footware Inventory",
      description: "An automated kubernetes, multi-node cluster deployment for a simple inventory webapp.",
      thumbnail: "/assets/thumbnails/k8s-deploy.png",
      stack: [
        { tech: "Docker", icon: "" },
      ],
      link: "https://github.com/tyrone-wu/footwear-webstore-cloudops",
    },
    {
      name: "Research Exchange",
      description: "A Stack Exchange-like web application for research publications/articles to open the traditional peer-review to a crowd-review process.",
      thumbnail: "/assets/thumbnails/research-exchange.png",
      stack: [
        
      ],
      link: "https://github.com/tyrone-wu/ResearchExchange",
    },
    {
      name: "One Wallet",
      description: "A web application that centralizes a user's personal finance information with a customizable interface.",
      thumbnail: "/assets/thumbnails/one-wallet.png",
      stack: [
        
      ],
      link: "https://github.com/SelenaChen123/OneWallet",
    },
    {
      name: "Build, Deployment, & Monitoring Pipeline Tool",
      description: "A pipeline tool for monitoring a locally deployed webapp for providing observability on health, uptime, and latency.",
      thumbnail: "/assets/thumbnails/pipeline-tool.png",
      stack: [
        
      ],
      link: "https://github.com/tyrone-wu/deploy-monitor-pipline-tool",
    },
    // {
    //   name: "K-Modes Clustering on CS Job Descriptions",
    //   description: "",
    //   thumbnail: "",
    //   stack: [
    //   ],
    //   link: "https://github.com/tyrone-wu/kmodes-clustering-cs-jobs",
    // },
  ];

  return (
    <Box id="projects">
      <Card textColor={textPalette} title="Projects">
        <SimpleGrid 
          columns={[1, 2]}
          spacing={10}
          mb={2}
        >
          {projects.map((project: Props, i: number) => (
              <ProjectSection key={`${i}` + "-prj"} textPalette={textPalette} project={project} />
          ))}
        </SimpleGrid>
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function ProjectSection({ textPalette, project }: { textPalette: string, project : Props }) {
  const sectionBGColor = useColorModeValue("fall.0", "fall.3");

  return (
    <Box 
      width="full" 
      background={sectionBGColor}
      borderColor={textPalette}
      borderRightWidth={4}
    >
      <Link href={project.link} isExternal>
        <Flex 
          direction="column" 
          align="center"
          mx={6}
          my={2}
        >
          <Text textStyle="h3" align="center" mt={2}>
            {project.name}
          </Text>

          <Divider borderColor={textPalette} mt={1} mb={4} />

          <Text textStyle="sub" align="center" style={{textDecoration: "none"}} mb={4}>
            {project.description}
          </Text>
          <Image 
            src={project.thumbnail} 
            alt="project thumbnail" 
            w={["230px", "330px"]}
            borderRadius="2xl"
            objectFit="contain"
          />

          <Divider borderColor={textPalette} mt={6} />
        </Flex>
      </Link>

      <Flex 
        direction="row" 
        justify="center"
        mx={8}
        mb={4}
      >
        {project.stack.map((tech: TechIconProps, i: number) => (
          <TechIcon key={`${i}` + "-" + `${tech.tech}`} tech={tech} />
        ))}
      </Flex>
    </Box>
  );
};

function TechIcon({ tech }: { tech: TechIconProps }) {
  return (
    <>
      <Text textStyle="sub">
        {tech.tech}
      </Text>
    </>
  );
};