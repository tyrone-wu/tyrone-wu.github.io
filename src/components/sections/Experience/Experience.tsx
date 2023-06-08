import { Box, Image, Flex, Text, Spacer, UnorderedList, ListItem, Link, Divider, SimpleGrid } from "@chakra-ui/react";

import Card from "@/components/sections/Card";
import MiniCard from "@/components/sections/MiniCard";

interface Props {
  company: string;
  // link: string;
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
      // link: "https://www.csc.ncsu.edu/",
      logo: `${companyPath}` + "ncsu.png", 
      time: "Sep 2021 - Dec 2021", 
      position: "Teaching Assistant", 
      description: [
        "Generated importable rubric templates for Gradescope to streamline management and grading of assignments in the undergraduate and graduate sections of Automated Learning & Data Analysis.",
        "Facilitated feedback exchange between students and the professor and other TAs by exporting assignment evaluations with proper field mappings for direct import into Moodle using bash and python scripts.",
      ],
    },
    { 
      company: "nCino Inc.", 
      // link: "https://www.ncino.com/",
      logo: `${companyPath}` + "ncino.png", 
      time: "Jul 2020 - Aug 2020", 
      position: "Software Engineer Intern", 
      description: [
        "Developed a Salesforce component for expanding object details through dropdown and hover triggers, enabling granular display of retail information on enhancing end-user experience.",
        "Conducted Apex unit tests with a minimum of 90\% code coverage to ensure comprehensive validation of business logic and error handling for retail inventory management.",
        "Aided in the development of an XML DOM parser that automates field mappings and relationships for custom objects onto the Salesforce data model using XPath and an internal library.",
      ],
    },
    { 
      company: "NC Chinese Business Association", 
      // link: "https://www.nc-cba.org/",
      logo: `${companyPath}` + "nccba.png", 
      time: "May 2017 - May 2020", 
      position: "Student Web Developer", 
      description: [
        "Worked alongside the development team and event coordinators to deliver event pages as per speakers/clients design view.",
        "Created custom page templates and components to support design and format reusability, including attendance registration and event detail linking.",
        "Troubleshooted ticket purchase functionalities and link references for the Upcoming Event pages prior to deployment",
        "Rollout patches on the Upcoming & Past Events on the homepage to align with the scheduled timelines.",
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
      <Flex direction="column" mx={6} my={4}>
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
            {/* <Link href={job.link} isExternal> */}
            <Text as="u" textStyle="h3">
              {job.position}
            </Text>
            {/* </Link> */}

            <Flex direction={["column", "row"]}>
              <Text textStyle="body" fontWeight="medium">
                {job.company}
              </Text>
              <Spacer />
              <Text textStyle="sub">
                {job.time}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Divider borderColor={textPalette} mt={1} mb={2} />

        <UnorderedList textStyle="sub">
          {job.description.map((description: string, i: number) => (
            <ListItem key={`${job.company}` + "-d" + `${i}`} ml={4}>{description}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </MiniCard>
  );
};