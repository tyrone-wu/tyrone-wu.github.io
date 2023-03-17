import { Button, Icon, Link, SlideFade, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

interface Props {
  name: string;
  link: any;
  icon: IconType;
}

function LinkIcon({ icon }: { icon: IconType }) {
  return (
    <Icon
      as={icon}
      boxSize={6}
    />
  );
};

export default function Links({ textColor }: { textColor: string }) {
  const links = [
    { name: "GitHub", link: "https://github.com/tyrone-wu", icon: FaGithub },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/tyronekwu/", icon: FaLinkedin },
    { name: "Resume", link: "/files/Resume.pdf", icon: FaFilePdf },
    { name: "Email", link: "mailto:tboywu@gmail.com", icon: FaEnvelope },
  ];

  return (
    <Stack
      direction="row"
      gridGap={4}
      spacing={0}
      wrap="wrap"
    >
      {links.map((link: Props, i: number) => (
        <SlideFade 
          key={ "link." + `${link.name}` } 
          in 
          transition={{ enter: { delay: 0.6 + i * 0.1 } }}
        >
          <Link
            isExternal
            href={link.link}
          >
            <Button
              leftIcon={<LinkIcon icon={link.icon} />}
              textColor={textColor}
            >
              {link.name}
            </Button>
          </Link>
        </SlideFade>
      ))}
    </Stack>
  );
};