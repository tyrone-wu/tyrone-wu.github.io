import { Box, Image, Flex, Text, Spacer, UnorderedList, ListItem, Link, Divider, useColorModeValue, SimpleGrid } from "@chakra-ui/react";

import Card from "@/components/sections/Card";

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
        "Generated importable rubric templates/groups on Gradescope for assignments.",
        "Exported assignment evaluations with appropriate field mappings to support direct imports onto Moodle.",
        "Provided iterative feedback for final research projects on problem statement, methodology, method approach, experimental design rationale and analysis, and experiment results.",
        "Graded general assignments and exams for both undergraduate and graduate section.",
      ],
    },
    { 
      company: "nCino Inc.", 
      link: "https://www.ncino.com/",
      logo: `${companyPath}` + "ncino.png", 
      time: "Jul 2020 - Aug 2020", 
      position: "Software Engineer Intern", 
      description: [
        "Created a Salesforce component that expands object details in response to user input to support granular display of custom retail information.",
        "Wrote Apex unit tests with at least 90% code coverage to ensure that business logic and error handling are covered.",
        "Helped develop an XML DOM parser that automates field mappings and relationships for custom objects on the nCino data model using XPath with an internal library.",
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

  const sectionBGColor = useColorModeValue("fall.0", "fall.3");

  return (
    <Box id="experience">
      <Card textColor={textPalette} title="Experience">
        <SimpleGrid
          columns={1}
          spacing={6}
          mb={2}
        >
          {jobs.map((job: Props) => (
            <Subsection key={job.company} sectionBGColor={sectionBGColor} textPalette={textPalette} job={job} />
          ))}
        </SimpleGrid>
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function Subsection({ sectionBGColor, textPalette, job }: { sectionBGColor: string, textPalette: string, job: Props }) {
  return (
    <Box 
      width="full" 
      background={sectionBGColor}
      borderColor={textPalette}
      borderRightWidth={4}
    >
      <Flex direction="column" mx={6} mt={4}>
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
    </Box>
  );
};