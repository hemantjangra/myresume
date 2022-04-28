import { FC } from "react";
import { Box } from "@mui/material";

interface IProfilePhoto {}

export const ProfilePhoto: FC<IProfilePhoto> = () => {
  return (
    <Box>
      <Box
        component="img"
        src={"/images/home/ProfilePic.jpeg"}
        borderRadius="50%"
        width="200px"
        height="200px"
        alt="Hemant"
        sx={{ objectFit: "cover", margin: "10px" }}
      />
    </Box>
  );
};
