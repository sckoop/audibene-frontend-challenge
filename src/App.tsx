import React, { useEffect, useState } from 'react';

import CommentList from './components/CommentList/CommentList';
import Post from './components/Post/Post';
import Title from './components/Title/Title';
import styled from './styled';
import { RedditPost } from './types';

const Page = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(9)};
`;

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

  return (
    <Page>
      <Title
        text={redditPost.title}
        subreddit={redditPost.subreddit_name_prefixed}
        ups={redditPost.ups}
      />
      <div>
        <Post />
        <CommentList />
      </div>
    </Page>
  );
};

export default App;
