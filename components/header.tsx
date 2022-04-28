import { Box } from "@mui/material";
import { FC } from "react";
import { ProfilePhoto } from "./home/profilephoto";
import { Information } from "./home/information";

interface IHeader {}

export const Header: FC<IHeader> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ProfilePhoto />
      <Information />
    </Box>
  );
};
