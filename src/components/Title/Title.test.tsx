import React from 'react';

import { render } from '@testing-library/react';

import Title from './Title';

describe("Title", () => {
  test("Render a title with ups", () => {
    const { getByText } = render(
      <Title text="TITLE" subreddit="SUBREDDIT" ups={42402} />
    );

    expect(getByText("TITLE")).toBeInTheDocument();
    expect(getByText("SUBREDDIT")).toBeInTheDocument();
    expect(getByText("42.4k")).toBeInTheDocument();
  });
});
