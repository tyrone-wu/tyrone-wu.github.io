import { Link, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Text textStyle="body">
        I&apos;m a 🏳‍🌈 full-stack developer who specializes in the infrastructure, networking, and operational aspects of software.
      </Text>

      <Text textStyle="body">
        I enjoy weightlifting, watching goofy horror/low-budget movies, and contributing to open-source projects related to eBPF or container/networking/CNI technologies.
      </Text>

      <Text textStyle="body">
        I am currently learning about <Link href="https://cilium.io/" fontWeight="medium" isExternal>Cilium</Link> and <Link href="https://ebpf.io/" fontWeight="medium" isExternal>eBPF</Link>, and will be building my very first homelab! 
      </Text>
    </>
  );
};