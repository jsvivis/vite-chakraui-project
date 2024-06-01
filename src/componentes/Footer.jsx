import { FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";

export function Footer(props) {
  return (
    <Box as="footer" bg="gray.700" color="white" py={4} px={8}>
      <Box as="nav" mb={4}>
        <List
          display="flex"
          flexDirection="column"
          alignItems="start"
          spacing={2}
        >
          <ListItem>
            Marcos Paratella
            <Box display="flex" flexDirection="column">
              <Link href="#" display="flex" alignItems="center">
                <FaLinkedin />
                <Text ml={2}>Linkedin</Text>
              </Link>
              <Link href="#" display="flex" alignItems="center">
                <FaGithub />
                <Text ml={2}>GitHub</Text>
              </Link>
            </Box>
          </ListItem>
          <ListItem>Rio Pomba Valley</ListItem>
          <ListItem>
            Mayra Pacheco
            <Box display="flex" flexDirection="column">
              <Link href="#" display="flex" alignItems="center">
                <FaLinkedin />
                <Text ml={2}>Linkedin</Text>
              </Link>
              <Link href="#" display="flex" alignItems="center">
                <FaGithub />
                <Text ml={2}>GitHub</Text>
              </Link>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box textAlign="center">
        <Text>
          &copy; {new Date().getFullYear()} {props.nomePagina}
        </Text>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
