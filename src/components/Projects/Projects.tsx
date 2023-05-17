import { Box, Button, Divider, Flex, Image, Link, SimpleGrid, Text, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";

import Card from "../Card";
import { iconMap } from "../data/icons";

interface Props {
  name: string;
  description: string;
  thumbnail: string;
  stack: string[];
  link: string;
};

export default function Projects({ textPalette }: { textPalette: string }) {
  const projects = [
    {
      name: "K8s Cluster Deployment for Footware Inventory",
      description: "An automated kubernetes, multi-node cluster deployment for a simple inventory web app.",
      thumbnail: "/assets/thumbnails/k8s-deploy.png",
      stack: [ "Ansible", "AWS EC2", "Docker", "Kubernetes", "Locust", "microk8s", "Terraform" ],
      link: "https://github.com/tyrone-wu/footwear-webstore-cloudops",
    },
    {
      name: "Research Exchange",
      description: "A Stack Exchange-like web application for research publications/articles to open the traditional peer-review to a crowd-review process.",
      thumbnail: "/assets/thumbnails/research-exchange.png",
      stack: [ "Java", "Micronaut", "Next.js", "Oracle Cloud", "Oracle DB", "Typescript", "React" ],
      link: "https://github.com/tyrone-wu/ResearchExchange",
    },
    {
      name: "One Wallet",
      description: "A web application that centralizes a user's personal finance information with a customizable interface.",
      thumbnail: "/assets/thumbnails/one-wallet.png",
      stack: [ "CSS", "Flask", "HTML", "Python", "React", "Typescript" ],
      link: "https://github.com/SelenaChen123/OneWallet",
    },
    {
      name: "Deployment & Monitoring Pipeline Tool",
      description: "A pipeline tool for monitoring a locally deployed web app to provide observability on compute resource, uptime, and latency.",
      thumbnail: "/assets/thumbnails/pipeline-tool.png",
      stack: [ "Ansible", "Bash/Shell", "Javascript", "Node.js", "Redis", "Ubuntu", "VirtualBox" ],
      link: "https://github.com/tyrone-wu/deploy-monitor-pipline-tool",
    },
    // {
    //   name: "K-Modes Clustering on CS Job Descriptions",
    //   description: "",
    //   thumbnail: "",
    //   stack: [],
    //   link: "https://github.com/tyrone-wu/kmodes-clustering-cs-jobs",
    // },
  ];

  const iconBGColor = useColorModeValue("fallShade.1", "fall.2");

  return (
    <Box id="projects">
      <Card textColor={textPalette} title="Projects">
        <SimpleGrid 
          columns={[1, 2]}
          spacing={10}
          mb={2}
        >
          {projects.map((project: Props, i: number) => (
              <ProjectSection key={`${i}` + "-prj"} textPalette={textPalette} project={project} iconBGColor={iconBGColor} />
          ))}
        </SimpleGrid>
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function ProjectSection({ textPalette, project, iconBGColor }: { textPalette: string, project : Props, iconBGColor: string }) {
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

          <Divider borderColor={textPalette} mt={4} mb={2} />
        </Flex>
      </Link>

      <Flex 
        direction="row"
        wrap="wrap"
        gridGap="10px"
        columnGap="6px"
        justify="center"
        mx={4}
        mb={4}
      >
        {project.stack.map((tech: string, i: number) => (
          <TechIcon key={`${i}` + "-" + `${tech}`} tech={tech} iconBGColor={iconBGColor} />
        ))}
      </Flex>
    </Box>
  );
};

function TechIcon({ tech, iconBGColor }: { tech: string, iconBGColor: string }) {
  const stack = iconMap.get(tech);
  return (
    <Link href={stack?.link} isExternal>
      <Button 
        rightIcon={<Image src={stack?.icon} alt={tech} h="20px" />}
        borderRadius="none"
        backgroundColor={iconBGColor}
        iconSpacing="5px"
        w="85%"
        h="34px"
      >
        <Text textStyle="icon">
          {tech}
        </Text>
      </Button>
    </Link>
  );
};