import { Text, ListItem, UnorderedList, Grid, Link, useColorModeValue, Flex } from "@chakra-ui/react";

import MiniCard from "@/components/sections/MiniCard";

export default function Education({ textPalette }: { textPalette: string }) {
  const c1 = ["Software Engineering", "Computer Networks", "DevOps: Modern SWE Practices", "Compiler Construction"];
  const c2 = ["Data Structures & Algorithms", "Database Management Systems", "Automated Learning & Data Analysis", "Concepts & Facilities of Operating Systems"];

  const schoolColor = useColorModeValue("school.0", "school.1");
  const degreeColor = useColorModeValue("degree.0", "degree.1");

  return (
    <MiniCard textPalette={textPalette}>
      <Flex direction="column" mx={6} my={4}>
        <Text as="u" textStyle="h2">
          Education
        </Text>

        <Text textStyle="h3" textColor={schoolColor}>
          <Link href="https://www.ncsu.edu/" isExternal>
            🐺 North Carolina State University
          </Link>
        </Text>

        <Text textStyle="body" textColor={degreeColor} mt={1} ml={4}>
          Master of Computer Science
        </Text>
        <UnorderedList textStyle="sub" textColor={degreeColor}>
          <ListItem ml={8}>Accelerated Bachelor&apos;s/Master&apos;s Program</ListItem>
        </UnorderedList>
        <Text textStyle="body" textColor={degreeColor} mt={1} ml={4}>
          B.S. Computer Science + Statistics Minor
        </Text>
        
        <Text textStyle="body" fontWeight="medium" mt={2}>
          Coursework:
        </Text>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
          <UnorderedList pl={3} textStyle="body">
            {c1.map((course: string) => (
              <ListItem key={course}>{course}</ListItem>
            ))}
          </UnorderedList>
          <UnorderedList pl={3} textStyle="body">
            {c2.map((course: string) => (
              <ListItem key={course}>{course}</ListItem>
            ))}
          </UnorderedList>
        </Grid>
      </Flex>
    </MiniCard>
  );
};