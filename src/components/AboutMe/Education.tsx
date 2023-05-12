import { Text, ListItem, UnorderedList, Grid, Link, useColorModeValue } from "@chakra-ui/react";

export default function Education() {
  const c1 = ["Software Engineering", "Computer Networks", "DevOps: Modern SWE Practices", "Compiler Construction"];
  const c2 = ["Data Structures & Algorithms", "Database Management Systems", "Automated Learning & Data Analysis", "Concepts & Facilities of Operating Systems"];

  const schoolColor = useColorModeValue("school.0", "school.1");
  const degreeColor = useColorModeValue("degree.0", "degree.1");

  return (
    <>
      <Text as="u" textStyle="h2" mt={8}>
        Education
      </Text>

      <Text textStyle="h3" textColor={schoolColor}>
        <Link href="https://www.ncsu.edu/" isExternal>
          🐺 North Carolina State University
        </Link>
      </Text>

      <Text textStyle="body" pl={10} textColor={degreeColor} mt={1}>
        Master of Computer Science
      </Text>
      <UnorderedList pl={14} textStyle="sub" textColor={degreeColor}>
        <ListItem>Accelerated Bachelor&apos;s/Master&apos;s Program</ListItem>
      </UnorderedList>
      <Text textStyle="body" pl={10} textColor={degreeColor} mt={1}>
        B.S. Computer Science + Statistics Minor
      </Text>
      
      <Text textStyle="body" fontWeight="medium" mt={2}>
        Coursework:
      </Text>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} mb={2}>
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
    </>
  );
};