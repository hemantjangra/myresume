import { FC } from "react";
import { Box, Container } from "@mui/material";
import { ResumeContainer } from "../styledcomponents/resumecontainer";
import { Header } from "../header";
import { About } from "../home/about";
import { Work } from "../home/work";
import { Footer } from "../home/footer";
import TestCall from "../home/testCall";

interface IThreeColumnLayout {}

export const ThreeColumnLayout: FC<IThreeColumnLayout> = () => {
  return (
    <ResumeContainer>
      <Box width="25%" bgcolor="darkblue"></Box>
      <Box width="50%" bgcolor="white">
        <Header />
        <About careerStart={new Date("2012, 07, 18")} />
        <Work />
        <Footer />
      </Box>
      <Box width="25%" bgcolor={"darkblue"}></Box>
    </ResumeContainer>
  );
};
