interface Company {
  name: string;
  link: string;
  logo: string;
  time: string;
  position: string;
  // description: string[];
}

export const data: Company[] = [
  {
    name: "NC State University",
    link: "https://www.csc.ncsu.edu",
    logo: "ncsu.png",
    time: "Sep 2021 - Dec 2021",
    position: "Teaching Assistant",
    // description: [
    //   "Generated importable rubric templates for Gradescope to streamline management and grading of assignments in the undergraduate and graduate sections of Automated Learning & Data Analysis.",
    //   "Facilitated feedback exchange between students and the professor and other TAs by exporting assignment evaluations with proper field mappings for direct import into Moodle using bash and python scripts.",
    // ],
  },
  {
    name: "nCino Inc.",
    link: "https://www.ncino.com",
    logo: "ncino.png",
    time: "Jul 2020 - Aug 2020",
    position: "Software Engineer Intern",
    // description: [
    //   "Developed a Salesforce component for expanding object details through dropdown and hover triggers, enabling granular display of retail information on enhancing end-user experience.",
    //   "Conducted Apex unit tests with a minimum of 90% code coverage to ensure comprehensive validation of business logic and error handling for retail inventory management.",
    //   "Aided in the development of an XML DOM parser that automates field mappings and relationships for custom objects onto the Salesforce data model using XPath and an internal library.",
    // ],
  },
  {
    name: "NC Chinese Business Association",
    link: "https://www.nc-cba.org",
    logo: "nccba.png",
    time: "May 2017 - May 2020",
    position: "Student Web Developer",
    // description: [
    //   "Worked alongside the development team and event coordinators to deliver event pages as per speakers/clients design view.",
    //   "Created custom page templates and components to support design and format reusability, including attendance registration and event detail linking.",
    //   "Troubleshooted ticket purchase functionalities and link references for the Upcoming Event pages prior to deployment",
    //   "Rollout patches on the Upcoming & Past Events on the homepage to align with the scheduled timelines.",
    // ],
  },
];
