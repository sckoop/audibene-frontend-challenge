import React, { useContext, useEffect } from "react";

import { Styled } from "./App.styles";
import { ScreensError } from "./screens/Error";
import { ScreensHome } from "./screens/Home";
import { Status, store } from "./store";

const App = () => {
  const { state, fetchRedditPost } = useContext(store);

  useEffect(() => {
    fetchRedditPost(
      "https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json"
    );
  }, [fetchRedditPost]);

  const { status } = state;

  if (status === Status.Failure) {
    return (
      <Styled.Screen>
        <ScreensError />
      </Styled.Screen>
    );
  }

  const isLoading = status !== Status.Success;

  return (
    <Styled.Screen>
      <ScreensHome redditPost={state.redditPost} isLoading={isLoading} />
    </Styled.Screen>
  );
};

export default App;
