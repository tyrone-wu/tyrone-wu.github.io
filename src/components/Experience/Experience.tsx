import { Box, Image, Flex, Text, Spacer, UnorderedList, ListItem, Link, Divider } from "@chakra-ui/react";

import Card from "../Card";

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
        "Collaborated in a SCRUM team of developers to complete user stories and technical tasks as part of the Retail PDE Portfolio team.",
        "Created a Salesforce component that expands object details in response to user input to support granular display of custom retail information.",
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
        "Troubleshooted and verify ticket purchase functionalities and URL references for Upcoming Events pages prior to deployment.",
        "Correct frontend layout of Upcoming & Past Events on the homepage to align with the scheduled timelines.",
      ],
    },
  ];

  return (
    <Box id="experience">
      <Card textColor={textPalette} title="Experience">
        {jobs.map((job: Props) => (
          <Subsection key={job.company} textPalette={textPalette} job={job} />
        ))}
      </Card>
      <Box mb={52} />
    </Box>
  );
};

function Subsection({ textPalette, job }: { textPalette: string, job: Props }) {
  return (
    <>
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
          <Flex direction="row" align="center" gap={4}>
              <Link href={job.link} isExternal>
                <Text as="u" textStyle="h3">
                  {job.company}
                </Text>
              </Link>
          </Flex>

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

      <UnorderedList textStyle="sub" mt={2} mb={6}>
        {job.description.map((description: string, i: number) => (
          <ListItem key={`${job.company}` + "-d" + `${i}`} ml={4}>{description}</ListItem>
        ))}
      </UnorderedList>
      
      <Divider 
        borderColor={textPalette} 
        borderWidth="thin"
        mb={6}
      />
    </>
  );
};