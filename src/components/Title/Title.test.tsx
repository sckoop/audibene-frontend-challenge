import React from "react";

import { render } from "@testing-library/react";

import ThemeProvider from "../../styles/ThemeProvider";
import Title from "./Title";

describe("components/Title", () => {
  test("Render a title with ups", () => {
    const { getByText } = render(
      <ThemeProvider>
        <Title text="TITLE" subreddit="SUBREDDIT" ups={42402} />
      </ThemeProvider>
    );

    expect(getByText("TITLE")).toBeInTheDocument();
    expect(getByText("SUBREDDIT")).toBeInTheDocument();
    expect(getByText("42.4k")).toBeInTheDocument();
  });
});
