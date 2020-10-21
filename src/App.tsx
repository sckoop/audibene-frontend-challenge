import React, { useEffect, useState } from 'react';

import CommentList from './components/CommentList/CommentList';
import Post from './components/Post/Post';
import Title from './components/Title/Title';
import styled from './styled';
import { RedditPost } from './types';

const Page = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(9)};
  margin: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(6)};
  @media (min-width: 1280px) {
    margin: ${({ theme }) => theme.spacing(16)}
      ${({ theme }) => theme.spacing(26)};
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.post.background};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(3)};
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
      <Container>
        <Post />
        <CommentList />
      </Container>
    </Page>
  );
};

export default App;
