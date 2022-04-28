import { FC } from "react";
import { Box, Container } from "@mui/material";
import { ResumeContainer } from "../styledcomponents/resumecontainer";
import { Header } from "../header";
import { About } from "../../Application/home/about";

interface IThreeColumnLayout {}

export const ThreeColumnLayout: FC<IThreeColumnLayout> = () => {
  return (
    <ResumeContainer>
      <Box width="25%" bgcolor="darkblue"></Box>
      <Box width="50%" bgcolor="white">
        <Header />
        <About />
      </Box>
      <Box width="25%" bgcolor={"darkblue"}></Box>
    </ResumeContainer>
  );
};
