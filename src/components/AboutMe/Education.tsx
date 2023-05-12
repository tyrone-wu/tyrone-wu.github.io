import { Text, ListItem, UnorderedList, Grid, Link } from "@chakra-ui/react";

export default function Education() {
  return (
    <>
      <Text as="u" textStyle="h2" mt={8}>
        Education
      </Text>

      <Text textStyle="h3">
        <Link href="https://www.ncsu.edu/" isExternal>
          North Carolina State University
        </Link>
      </Text>

      <Text textStyle="body" pl={3}>
        Master of Computer Science
      </Text>
      <Text textStyle="body" pl={3}>
        B.S. Computer Science + Statistics Minor
      </Text>
      
      <Text textStyle="body" fontWeight="medium" mt={2}>
        Coursework:
      </Text>

      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <UnorderedList pl={3} textStyle="body">
          <ListItem>Software Engineering</ListItem>
          <ListItem>Computer Networks</ListItem>
          <ListItem>DevOps: Modern SWE Practices</ListItem>
          <ListItem>Compiler Construction</ListItem>
        </UnorderedList>
        <UnorderedList pl={3} textStyle="body">
          <ListItem>Data Structures & Algorithms</ListItem>
          <ListItem>Database Management Systems</ListItem>
          <ListItem>Automated Learning & Data Analysis</ListItem>
          <ListItem>Concepts & Facilities of Operating Systems</ListItem>
        </UnorderedList>
      </Grid>
    </>
  );
};