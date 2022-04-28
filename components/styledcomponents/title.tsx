import { createRef, FC, useCallback, useEffect, useRef, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";

interface ITitle {
  title: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    "@keyframes balance": {
      "0%, 100%": {
        transform: "rotate(0deg)",
      },
      "30%, 60%": {
        transform: "rotate(-45deg)",
      },
    },
    "@keyframes shrinkjump": {
      "10%, 35%": {
        transform: "scale(2, .2) translate(0,0)",
      },
      "45%, 50%": {
        transform: "scale(1) translate(0, -150px)",
      },
      "80%": {
        transform: "scale(1) translate(0,0)",
      },
    },
    "@keyframes falling": {
      "12%": {
        transform: "rotate(240deg)",
      },
      "24%": {
        transform: "rotate(150deg)",
      },
      "36%": {
        transform: "rotate(200deg)",
      },
      "48%": {
        transform: "rotate(175deg)",
      },
      "60%, 85% ": {
        transform: "rotate(180deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
    "@keyframes rotate": {
      "20%, 80%": {
        transform: "rotate(180deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
    "@keyframes toplong": {
      "10%, 40%": {
        transform: "translateY(-48vh) scaleY(1)",
      },
      "90%": {
        transform: "translateY(-48vh) scaleY(4)",
      },
    },
    word: {
      perspective: "1000px",
      margin: "50px 0 10px 10px",
      "& span": {
        cursor: "pointer",
        fontSize: "50px",
        fontWeight: "600",
        userSelect: "none",
        lineHeight: 0.8,
        "&:nth-child(1).active": {
          animation: "$balance 1.5s ease-out",
          transformOrigin: "bottom left",
        },
        "&:nth-child(2).active": {
          animation: "$shrinkjump 1s ease-in-out",
          transformOrigin: "bottom center",
        },
        "&:nth-child(3).active": {
          animation: "$falling 2s ease-out",
          transformOrigin: "bottom center",
        },
        "&:nth-child(4).active": {
          animation: "$rotate 1s ease-out",
        },
        "&:nth-child(5).active": {
          animation: "$toplong 1.5s linear",
        },
      },
    },
  })
);

export const Title: FC<ITitle> = ({ title }) => {
  const styles = useStyles();
  const [titleChars, setTitleChars] = useState<string[]>([]);
  const [animationTimer, setAnimationTimer] = useState<number>(0);

  const refs = useRef<any[]>([]);

  const anotherRef = useCallback((elem: any) => {
    if (elem) {
      setAnimationTimer(animationTimer + 1);
      elem.addEventListener("click", (e: any) => {
        e.target.classList.add("active");
      });

      elem.addEventListener("animationend", (e: any) => {
        e.target.classList.remove("active");
        console.log(`event animationend is added`, e.target);
      });

      setTimeout(() => {
        elem.classList.add("active");
      }, 750 * (animationTimer + 1));
    }
  }, []);

  useEffect(() => {
    setTitleChars(title.toUpperCase().split(""));
    console.log("title chars while the update is ", titleChars);
  }, []);

  return (
    <div className={styles.word}>
      {titleChars &&
        titleChars.map((titleChar: string) => (
          <span ref={anotherRef} key={titleChar}>
            {titleChar}
          </span>
        ))}
    </div>
  );
};
