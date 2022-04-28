import { FC, ReactNode } from "react";
import { createStyles, makeStyles } from "@mui/styles";

interface IAbout {
  children?: ReactNode;
}

const useStyles = makeStyles(() =>
  createStyles({
    about: {
      margin: "10px",
    },
  })
);

export const AboutStyled: FC<IAbout> = ({ children }) => {
  const classes = useStyles();

  return <p className={classes.about}>{children}</p>;
};
