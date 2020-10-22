import React, { useEffect, useState } from "react";

import { Styled } from "./App.styles";
import CommentList from "./components/CommentList/CommentList";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import { RedditPost } from "./types";

const App = () => {
  const [redditPost, setRedditPost] = useState<RedditPost | null>(null);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json"
    ).then((response: Response) => {
      response.json().then((data: any) => setRedditPost(data));
    });
    // TODO error handling
  }, []);

  if (!redditPost) {
    // TODO better loading page
    return <div>Loading...</div>;
  }

  const amountOfComments = redditPost.comments ? redditPost.comments.length : 0;

  return (
    <Styled.Page>
      <Title
        text={redditPost.title}
        subreddit={redditPost.subreddit_name_prefixed}
        ups={redditPost.ups}
      />
      <Styled.Container>
        <Post
          text={redditPost.selftext_html}
          amountOfComments={amountOfComments}
        />
        <CommentList />
      </Styled.Container>
    </Styled.Page>
  );
};

export default App;
