import { Button, Icon, Link, SlideFade, Stack, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

interface Props {
  name: string;
  link: any;
  icon: IconType;
}

export default function Links({ textColor }: { textColor: string }) {
  const links = [
    { name: "GitHub", link: "https://github.com/tyrone-wu", icon: FaGithub },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/tyronekwu/", icon: FaLinkedin },
    { name: "Resume", link: "https://drive.google.com/file/d/1tU8-WdKRHZnlWpYAHn7vmYGf7DTsLhjI/view?usp=sharing", icon: FaFilePdf },
    { name: "Email", link: "mailto:wudevelops@gmail.com", icon: FaEnvelope },
  ];
  const bgShade = useColorModeValue("blackAlpha.200", "whiteAlpha.300");

  return (
    <Stack
      direction={["column", "row"]}
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
              height={14}
              backgroundColor={bgShade}
              boxShadow="xl"
              width={["full", "initial"]}
              borderRadius="none"
              backdropFilter="auto"
            >
              {link.name}
            </Button>
          </Link>
        </SlideFade>
      ))}
    </Stack>
  );
};

function LinkIcon({ icon }: { icon: IconType }) {
  return (
    <Icon
      as={icon}
      boxSize={6}
    />
  );
};