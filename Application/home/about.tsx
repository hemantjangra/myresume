import { FC } from "react";
import { Title } from "../../components/styledcomponents/title";
import { AboutStyled } from "../../components/styledcomponents/aboutStyled";

interface IAbout {}

export const About: FC<IAbout> = () => {
  return (
    <>
      <Title title="About" />
      <AboutStyled>
        I am a Full Stack Developer who has working experiences on microservices
        with .net Core, Node as backend. I work with React, javascript as front
        end technologies, use Docker and Kubernetes as container and Azure/AWS
        as cloud infrastructure.
      </AboutStyled>
    </>
  );
};
