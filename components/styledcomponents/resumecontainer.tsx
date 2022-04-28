import React, { FC } from "react";
import { createStyles, makeStyles } from "@mui/styles";

export interface IResumeContainerProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles(() =>
  createStyles({
    resumeContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      minHeight: "150px",
      height: "100%",
    },
  })
);

export const ResumeContainer: FC<IResumeContainerProps> = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.resumeContainer}>{children}</div>;
};
