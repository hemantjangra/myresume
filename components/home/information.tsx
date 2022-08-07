import { FC } from "react";
import { Box } from "@mui/material";

interface IInformtion {}

export const Information: FC<IInformtion> = () => {
  return (
    <Box textAlign="center" mr="10px">
      <h3>Hemant Kumar</h3>
      <p>Lead Engineer Comm100</p>
      <p>hemant.sharma.12@outlook.com</p>
      <p>+91-9650389878</p>
    </Box>
  );
};
