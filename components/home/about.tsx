import { FC, useEffect, useState } from "react";
import { Title } from "../styledcomponents/title";
import { AboutStyled } from "../styledcomponents/aboutStyled";

interface IAbout {
  careerStart: Date;
}

export const About: FC<IAbout> = ({
  careerStart = new Date("2012, 07, 18"),
}) => {
  const [exp, setExp] = useState<string>();

  useEffect(() => {}, []);

  return (
    <>
      <Title title="About" />
      <AboutStyled>
        I am a Full Stack Developer who has working experiences on microservices
        with .net Core, Node as backend. I work with React, javascript as front
        end technologies, use Docker and Kubernetes for containerization and
        Azure/AWS as cloud infrastructure.
      </AboutStyled>
    </>
  );
};
