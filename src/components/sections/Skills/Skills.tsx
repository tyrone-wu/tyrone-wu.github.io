import { Box, Button, Divider, Flex, GridItem, Image, Link, SimpleGrid, Text, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";

import { iconMap } from "@/components/data/icons";
import Card from "@/components/sections/Card";

interface Props {
  textPalette: string;
  skillsBGColor: string;
  title: string;
  skillSet: string[];
  isCert: boolean;
};

export default function Skills({ textPalette }: { textPalette: string }) {
  const languages = ["Java", "Rust", "Python", "C++", "Typescript", "Bash/Shell",];
  const libs = ["Spring Boot", "Micronaut", "React", "Next.js", "Chakra UI",];
  const tools = [
    "AWS", "Oracle Cloud", "Unix/Linux", "Ansible", "GitHub Actions", "Docker", "Terraform", "Kubernetes", "Codecov", "VirtualBox", "Vagrant", "MySQL", "Node.js", "Postman", "Figma",
  ];
  const certifications = [
    "AWS Certified Developer - Associate",
    "Certified K8s Application Developer",
    "Certified K8s Administrator"
  ];

  const background = useColorModeValue("background.0", "background.1");
  const innerBackground = useColorModeValue("cardBackground.0", "cardBackground.1");

  return (
    <Box id="skills">
      <Card textColor={textPalette} title="Skills">
        <SimpleGrid
          columns={[1, 2]}
          gap={6}
          mb={2}
        >
          <GridItem backgroundColor={background} borderColor={textPalette} borderWidth={1} borderRightWidth={4}>
            <SkillSet textPalette={textPalette} skillsBGColor={innerBackground} title="Programming Languages" skillSet={languages} isCert={false} />
          </GridItem>
          <GridItem backgroundColor={background} borderColor={textPalette} borderWidth={1} borderRightWidth={4}>
            <SkillSet textPalette={textPalette} skillsBGColor={innerBackground} title="Libraries/Frameworks" skillSet={libs} isCert={false} />
          </GridItem>
          <GridItem backgroundColor={background} borderColor={textPalette} borderWidth={1} borderRightWidth={4}>
            <SkillSet textPalette={textPalette} skillsBGColor={innerBackground} title="Tools/Software" skillSet={tools} isCert={false} />
          </GridItem>
          <GridItem backgroundColor={background} borderColor={textPalette} borderWidth={1} borderRightWidth={4}>
            <SkillSet textPalette={textPalette} skillsBGColor={innerBackground} title="Certifications" skillSet={certifications} isCert={true} />
          </GridItem>
        </SimpleGrid>
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function SkillSet({ textPalette, skillsBGColor, title, skillSet, isCert }: Props) {
  return (
    <Flex direction="column" mx={4} my={2}>
      <Text textStyle="h3" mt={2}>
        {title}
      </Text>

      <Divider borderColor={textPalette} mt={1} mb={4} />

      <Wrap spacing="2px" justify="center">
        {skillSet.map((skill: string) => (
          <WrapItem key={skill}>
            <SkillIcon borderColor={textPalette} bgColor={skillsBGColor} skill={skill} isCert={isCert} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

function SkillIcon({ borderColor, bgColor, skill, isCert }: { borderColor: string, bgColor: string, skill: string, isCert: boolean }) {
  const tech = iconMap.get(skill);

  return (
    <Link href={tech?.link} isExternal>
      <Button
        borderColor={borderColor}
        backgroundColor={bgColor}
        borderWidth="2px"
        borderRadius="none"
        boxSize={isCert ? "182px" : "90px"}
        style={{ whiteSpace: "normal" }}
      >
        <Flex direction="column">
          <Image
            src={tech?.icon}
            alt={skill}
            objectFit="contain"
            height={isCert ? "118px" : "40px"}
            mb={skill.indexOf(' ') >= 0 ? "0px" : "8px"}
            loading="lazy"
          />
          <Text textStyle="icon">{skill}</Text>
        </Flex>
      </Button>
    </Link>
  );
};