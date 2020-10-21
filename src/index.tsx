import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Theme } from './styled';

const theme: Theme = {
  colors: {
    background: "#F9F9F9",
    post: {
      background: "#FFFFFF",
      textBackground: "#F1F1F1",
    },
    subtitle: "rgba(88,88,88,0.87)",
    text: "rgba(0,0,0,0.6)",
    title: "#2C2C2C",
    username: "#36A3F0",
  },
  fontSize: {
    small: "12px",
    medium: "14px",
    large: "16px",
    extraLarge: "24px",
  },
  spacing: (size: number = 1) => `${size * 8}px`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
