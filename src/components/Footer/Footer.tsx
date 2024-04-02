import { Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa';

export default function Footer({ textPalette }: { textPalette: string }) {
  return (
    <Flex
      width="full"
      height="148px"
      direction="column"
      justify="center"
      align="center"
      textColor={textPalette}
      textStyle="icon"
      fontWeight="normal"
    >
      <Divider borderColor={textPalette} maxWidth={["200px", "400px"]} mb="12px" />

      <Text>
        💻 Built with <Link fontWeight="medium" href="https://react.dev/" isExternal>React</Link> & <Link fontWeight="medium" href="https://chakra-ui.com/" isExternal>Chakra UI</Link>.
      </Text>

      <Link href="https://github.com/tyrone-wu/tyrone-wu.github.io" isExternal mt={1}>
        <Flex direction="row" align="center">
          <Icon as={FaGithub} size={2} mr={2} />
          <Text fontWeight="medium">Source Code</Text>
        </Flex>
      </Link>
    </Flex>
  );
};