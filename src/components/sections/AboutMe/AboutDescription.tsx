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
        I am currently learning about <Link href="https://cilium.io/" fontWeight="medium" isExternal>Cilium</Link> and <Link href="https://ebpf.io/" fontWeight="medium" isExternal>eBPF</Link>, and will be creating my very first homelab with <Link href="https://www.proxmox.com/en/" fontWeight="medium" isExternal>Proxmox</Link>! 
      </Text>
    </>
  );
};