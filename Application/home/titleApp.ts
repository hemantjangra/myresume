import { useState } from "react";

type TitleApp = {
  titleChars: string[];
  updateTitleChars: () => void;
};

interface ITitleApp {
  title: string;
}

export const TitleApp = ({ title }: ITitleApp): TitleApp => {
  const [titleChars, setTitleChars] = useState<string[]>([]);

  const updateTitleChars = () => {
    setTitleChars(title.toUpperCase().split(""));
  };

  return { titleChars, updateTitleChars };
};
