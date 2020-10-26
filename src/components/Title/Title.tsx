import React from "react";

import { formatUps } from "../../utils";
import Skeleton from "../Skeleton/Skeleton";
import { Styled } from "./Title.styles";

export interface TitleProps {
  text?: string;
  subreddit?: string;
  ups?: number;
  isLoading?: boolean;
}

const Title = ({ text, subreddit, ups = 0, isLoading }: TitleProps) => {
  if (isLoading) {
    return (
      <Styled.Wrapper>
        <Skeleton wrapper={Styled.SubredditSkeleton} />
        <Skeleton wrapper={Styled.TitleSkeleton} />
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Styled.Subreddit>{subreddit}</Styled.Subreddit>
      <Styled.Title>
        <Styled.Ups>{formatUps(ups)}</Styled.Ups>
        <Styled.Text>{text}</Styled.Text>
      </Styled.Title>
    </Styled.Wrapper>
  );
};

export default Title;
