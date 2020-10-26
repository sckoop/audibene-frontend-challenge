import React, { useContext, useEffect } from "react";

import { Styled } from "./App.styles";
import CommentList from "./components/Comment/List";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
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
    return <div>BROKEN</div>;
  }

  const redditPost = state.redditPost || ({} as any);
  const isLoading = status !== Status.Success;

  return (
    <Styled.Page>
      <Title
        text={redditPost.title}
        subreddit={redditPost.subreddit_name_prefixed}
        ups={redditPost.ups}
        isLoading={isLoading}
      />
      <Styled.Container>
        <Post
          text={redditPost.selftext_html}
          totalComments={redditPost.totalComments}
          isLoading={isLoading}
        />
        <CommentList comments={redditPost.comments} isLoading={isLoading} />
      </Styled.Container>
    </Styled.Page>
  );
};

export default App;
