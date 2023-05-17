import { Box, Button, Divider, Flex, SimpleGrid, GridItem, Text, useColorModeValue, Image, Link, Stack } from "@chakra-ui/react";

import Card from "@/components/sections/Card";
import { iconMap } from "@/components/data/icons";

interface Props {
  textPalette: string;
  skillsBGColor: string;
  title: string;
  skillSet: string[];
};

export default function Skills({ textPalette }: { textPalette: string }) {
  const languages = [ "Java", "Python", "C++", "Rust", "Typescript", "Javascript", "Bash/Shell", ];
  const libs = [ "Spring Boot", "Micronaut", "React", "Next.js", "Chakra UI", ];
  const tools = [ 
    "AWS", "Oracle Cloud", "Unix/Linux", "Ansible", "Docker", "Terraform", "Kubernetes", "VirtualBox", "MySQL", "Node.js", "Postman", "Figma",  
  ];

  const sectionBGColor = useColorModeValue("fall.0", "fall.3");
  const skillsBGColor = useColorModeValue("skills.0", "skills.1");
  
  return (
    <Box id="skills">
      <Card textColor={textPalette} title="Skills">
        <SimpleGrid
          columns={[1, 2]}
          gap={6}
          mb={2}
        >
          <GridItem backgroundColor={sectionBGColor} borderColor={textPalette} borderRightWidth={4}>
            <SkillSet textPalette={textPalette} skillsBGColor={skillsBGColor} title="Programming Languages" skillSet={languages} />
          </GridItem>
          <GridItem backgroundColor={sectionBGColor} borderColor={textPalette} borderRightWidth={4}>
          <SkillSet textPalette={textPalette} skillsBGColor={skillsBGColor} title="Libraries/Frameworks" skillSet={libs} />
          </GridItem>
          <GridItem backgroundColor={sectionBGColor} borderColor={textPalette} borderRightWidth={4} colSpan={[1, 2]}>
            <SkillSet textPalette={textPalette} skillsBGColor={skillsBGColor} title="Tools/Software" skillSet={tools} />
          </GridItem>
        </SimpleGrid>
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function SkillSet({ textPalette, skillsBGColor, title, skillSet }: Props) {
  return (
    <Flex direction="column" mx={4} my={2}>
      <Text textStyle="h3" mt={2}>
        {title}
      </Text>
      <Divider borderColor={textPalette} mt={1} mb={4} />

      <Flex 
        direction="row" 
        wrap="wrap"
        justify="center"
        gap="2px"
        mx={[0, 4]}
        mb={2} 
      >
        {skillSet.map((skill: string) => (
          <SkillIcon key={skill} borderColor={textPalette} bgColor={skillsBGColor} skill={skill} />
        ))}
      </Flex>
    </Flex>
  );
};

function SkillIcon({ borderColor, bgColor, skill }: { borderColor: string, bgColor: string, skill: string }) {
  const tech = iconMap.get(skill);

  return (
    <Link href={tech?.link} isExternal>
      <Button 
        borderColor={borderColor}
        backgroundColor={bgColor} 
        borderWidth="2px"
        borderRadius="none"
        boxSize="90px"
        style={{ whiteSpace: "normal" }}
      >
        <Flex direction="column">
          <Image 
            src={tech?.icon} 
            alt={skill} 
            objectFit="contain"
            height="40px"
            mb={skill.indexOf(' ') >= 0 ? "0px" : "8px"}
          />
          <Text textStyle="icon">{skill}</Text>
        </Flex>
      </Button>
    </Link>
  );
};