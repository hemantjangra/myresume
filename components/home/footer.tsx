import { FC } from "react";
import { Box, Container } from "@mui/material";

interface IFooter {}

export const Footer: FC<IFooter> = () => {
  return (
    <Container>
      <Box>copyright everyone</Box>
      <Box>
        <a>Linkedin</a>
        <a>Stackoverflow</a>
        <a>Git</a>
      </Box>
    </Container>
  );
};
