import { Flex, Link, Text } from "@chakra-ui/react"

import Card from "@/components/sections/Card"
// import MiniCard from "@/components/sections/MiniCard";

interface Props {
  textPalette: string
}

export default function About({ textPalette }: Props) {
  return (
    <Card textColor={textPalette} title="About Me">
      <Flex direction="column" gap={4}>
        <Text textStyle="body">
          I&apos;m a 🏳‍🌈 full-stack developer who specializes in the
          infrastructure, networking, and operational aspects of software.
        </Text>

        <Text textStyle="body">
          I enjoy weightlifting, watching goofy horror/low-budget movies, and
          contributing to open-source projects related to eBPF or
          container/networking/CNI technologies.
        </Text>

        <Text textStyle="body">
          I am currently learning about{" "}
          <Link href="https://cilium.io/" fontWeight="medium" isExternal>
            Cilium
          </Link>{" "}
          and{" "}
          <Link href="https://ebpf.io/" fontWeight="medium" isExternal>
            eBPF
          </Link>
          , and will be building my very first homelab!
        </Text>
      </Flex>
    </Card>
  )
}

// function Education({ textPalette }: { textPalette: string }) {
//   // const c1 = ["Software Engineering", "Computer Networks", "DevOps: Modern SWE Practices", "Compiler Construction"];
//   // const c2 = ["Data Structures & Algorithms", "Database Management Systems", "Automated Learning & Data Analysis", "Concepts & Facilities of Operating Systems"];

//   const schoolColor = useColorModeValue("school.0", "school.1");
//   const degreeColor = useColorModeValue("degree.0", "degree.1");

//   return (
//     <Flex direction="column">
//       <Text as="u" textStyle="h3">
//         Education
//       </Text>

//       <Text textStyle="body" textColor={schoolColor}>
//         <Link href="https://www.ncsu.edu/" isExternal>
//           North Carolina State University 🐺
//         </Link>
//       </Text>

//       <Text textStyle="body" textColor={degreeColor}>
//         Master of Computer Science
//       </Text>
//       <UnorderedList textStyle="sub" textColor={degreeColor}>
//         <ListItem>Accelerated Bachelor&apos;s/Master&apos;s Program</ListItem>
//       </UnorderedList>
//       <Text textStyle="body" textColor={degreeColor}>
//         B.S. Computer Science + Statistics Minor
//       </Text>

//       {/* <Text textStyle="body" fontWeight="medium" mt={2}>
//         Coursework:
//       </Text>
//       <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
//         <UnorderedList pl={3} textStyle="body">
//           {c1.map((course: string) => (
//             <ListItem key={course}>{course}</ListItem>
//           ))}
//         </UnorderedList>
//         <UnorderedList pl={3} textStyle="body">
//           {c2.map((course: string) => (
//             <ListItem key={course}>{course}</ListItem>
//           ))}
//         </UnorderedList>
//       </Grid> */}
//     </Flex>
//   );
// };
