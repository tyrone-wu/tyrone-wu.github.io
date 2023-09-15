import { Box, Image, Flex, Text, Spacer, UnorderedList, ListItem, Link, Divider, useColorModeValue, SimpleGrid } from "@chakra-ui/react";

import Card from "@/components/sections/Card";
import MiniCard from "@/components/sections/MiniCard";

interface Props {
  company: string;
  link: string;
  logo: string;
  time: string;
  position: string;
  description: string[];
};

export default function Experience({ textPalette }: { textPalette: string }) {
  const companyPath = "/assets/companies/";
  const jobs = [
    { 
      company: "NC State University", 
      link: "https://www.csc.ncsu.edu/",
      logo: `${companyPath}` + "ncsu.png", 
      time: "Sep 2021 - Dec 2021", 
      position: "Teaching Assistant - Automated Learning & Data Analysis", 
      description: [
        "Generated importable rubric templates within Gradescope to streamline classroom assignment management.",
        "Facilitated feedback exchange between students and the professor by exporting assignment evaluations with proper field mappings for direct import into Moodle.",
        "Delivered iterative feedback for final research projects, offering guidance and refinement suggestions on problem statements, methodologies, experimental design rationales, analyses, and experiment results.",
        "Graded general assignments and exams for both the undergraduate and graduate section of the courses.",
      ],
    },
    { 
      company: "nCino Inc.", 
      link: "https://www.ncino.com/",
      logo: `${companyPath}` + "ncino.png", 
      time: "Jul 2020 - Aug 2020", 
      position: "Software Engineer Intern", 
      description: [
        "Developed a Salesforce component enhancing object detail expansion triggered by dropdown components, enabling the granular display of retail information for improved end-user experience.",
        "Implemented Apex unit tests achieving a minimum of 90\% code coverage to validate business logic and error handling processes to achieve high-quality user retail inventory experience.",
        "Helped develop an XML DOM parser that automates field mappings and relationships for custom objects on the nCino data model using XPath and a custom internal library.",
      ],
    },
    { 
      company: "NC Chinese Business Association", 
      link: "https://www.nc-cba.org/",
      logo: `${companyPath}` + "nccba.png", 
      time: "May 2017 - May 2020", 
      position: "Student Web Developer", 
      description: [
        "Worked alongside Web Development Team and Event Coordinators to deliver event pages as per speakers/clients design view.",
        "Created a custom page template and components to support design and format reusability.",
        "Implemented event pages where users can register for attendance and view specific event details.",
        "Troubleshooted ticket purchase functionalities and URL references for Upcoming Events pages prior to deployment.",
        "Correct frontend layout of Upcoming & Past Events on the homepage to align with the scheduled timelines.",
      ],
    },
  ];

  return (
    <Box id="experience">
      <Card textColor={textPalette} title="Experience">
        <SimpleGrid
          columns={1}
          spacing={8}
          mb={2}
        >
          {jobs.map((job: Props) => (
            <Subsection key={job.company} textPalette={textPalette} job={job} />
          ))}
        </SimpleGrid>
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function Subsection({ textPalette, job }: { textPalette: string, job: Props }) {
  return (
    <MiniCard textPalette={textPalette}>
      <Flex direction="column" mx={6} mt={6}>
        <Flex 
          width="full"
          direction="row" 
          align="center"
        >
          <Image 
            src={job.logo} 
            alt="company logo" 
            mr={4} 
            boxSize={12}
          />

          <Flex width="full" direction="column">
            <Link href={job.link} isExternal>
              <Text as="u" textStyle="h3">
                {job.company}
              </Text>
            </Link>

            <Flex direction={["column", "row"]}>
              <Text textStyle="body" fontWeight="medium">
                {job.position}
              </Text>
              <Spacer />
              <Text textStyle="sub">
                {job.time}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Divider borderColor={textPalette} mt={1} mb={2} />

        <UnorderedList textStyle="sub" mb={6}>
          {job.description.map((description: string, i: number) => (
            <ListItem key={`${job.company}` + "-d" + `${i}`} ml={4}>{description}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </MiniCard>
  );
};