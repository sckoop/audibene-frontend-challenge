import React from 'react';
import { Helmet } from 'react-helmet';

import CommentList from '../components/Comment/List';
import Post from '../components/Post/Post';
import Title from '../components/Title/Title';
import { RedditPost } from '../store';
import styled from '../styles/styled';

interface ScreensHomeProps {
  redditPost?: RedditPost;
  isLoading: boolean;
}

const Container = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.post.background,
    borderRadius: theme.spacing(0.5),
    display: "grid",
    gridRowGap: theme.spacing(2),
    padding: theme.spacing(3),
  })};
`;

export const ScreensHome = ({
  redditPost = {} as any,
  isLoading,
}: ScreensHomeProps) => {
  return (
    <>
      <Helmet>
        <title>{redditPost.title || "Loading Post"}</title>
      </Helmet>
      <Title
        text={redditPost.title}
        subreddit={redditPost.subreddit_name_prefixed}
        ups={redditPost.ups}
        isLoading={isLoading}
      />
      <Container>
        <Post
          text={redditPost.selftext_html}
          totalComments={redditPost.totalComments}
          isLoading={isLoading}
        />
        <CommentList comments={redditPost.comments} isLoading={isLoading} />
      </Container>
    </>
  );
};
