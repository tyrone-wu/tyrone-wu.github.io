import { Link, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Text as="span" textStyle="body" fontWeight="medium">
        Hi, I&apos;m Tyrone Wu!{' '}
        <Text as="span" textStyle="body">
          (Yes, this is my actual birthname.)
        </Text>
      </Text>

      <Text textStyle="body">
        I&apos;m a full-stack developer with a special interest/focus in cloud and devops. I love finding ways to automate and streamline processes, as well as learning and being up-to-date with new tools/technologies in the industry.
      </Text>

      <Text textStyle="body" mt={2}>
        I am currently studying for the <Link href="https://www.cncf.io/certification/ckad/" fontWeight="medium" isExternal>CKAD</Link> exam and learning about <Link href="https://ebpf.io/" fontWeight="medium" isExternal>eBPF</Link>! 
      </Text>
    </>
  );
};