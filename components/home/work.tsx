import { FC } from "react";
import { Title } from "../styledcomponents/title";
import { Grid } from "@mui/material";

interface IWork {}

export const Work: FC<IWork> = () => {
  return (
    <>
      <Title title="Work" />
      <ul>
        <li>
          <b>Comm100</b>
          <p>Autooding framework, components, different channel integration</p>
        </li>
        <li>
          <b>Miral</b>
          <p>
            Worked on APIs with .net core with Azure tools and API
            management.Node for the reconciliation of booking. React for booking
            integration
          </p>
        </li>
        <li>
          <b>Nationwide</b>
          <p>
            Converted on-paper mortgage process to digital with API integration
            based on .net core for third party integration, mongo as DB. node
            for the analytics and React for the API integration
          </p>
        </li>
      </ul>
      <span>Connect for more...</span>
    </>
  );
};
