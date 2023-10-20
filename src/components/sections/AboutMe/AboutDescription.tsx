import { Link, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Text textStyle="body">
        I&apos;m a full-stack developer with a strong passion in the operational and networking aspects of software development. 
        I enjoy discovering ways to automate processes and workflows to build useful and efficient tools for developers.
      </Text>

      <Text textStyle="body">
        Aside from my career path, my hobbies include learning and being up-to-date with tools/technologies in the industry, weight lifting, and gaming (co-op and strategic).
      </Text>

      <Text textStyle="body">
        I am currently studying for the <Text as="span" fontWeight="medium">AWS Certified Developer Associate</Text> exam and learning about <Link href="https://ebpf.io/" fontWeight="medium" isExternal>eBPF</Link>! 
      </Text>
    </>
  );
};