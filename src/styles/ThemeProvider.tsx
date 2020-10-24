import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import React from "react";

import { Theme } from "./styled";

const theme: Theme = {
  colors: {
    background: "#F9F9F9",
    post: {
      background: "#FFFFFF",
      textBackground: "#F1F1F1",
    },
    comment: {
      border: "#EDEDED",
      header: "rgba(0, 0, 0, 0.87)",
      username: "#36A3F0",
    },
    subtitle: "rgba(88,88,88,0.87)",
    text: "rgba(0,0,0,0.6)",
    title: "#2C2C2C",
  },
  fontSize: {
    small: "12px",
    medium: "14px",
    large: "16px",
    extraLarge: "24px",
  },
  spacing: (size: number = 1) => `${size * 8}px`,
};

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);

export default ThemeProvider;
