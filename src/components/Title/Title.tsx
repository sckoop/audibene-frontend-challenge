import React from "react";

import { formatUps } from "../../utils";
import { Styled } from "./Title.styles";

export interface TitleProps {
  text: string;
  subreddit: string;
  ups: number;
}

const Title = ({ text, subreddit, ups }: TitleProps) => (
  <Styled.Wrapper>
    <Styled.Subreddit>{subreddit}</Styled.Subreddit>
    <Styled.Title>
      <Styled.Ups>{formatUps(ups)}</Styled.Ups>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Title>
  </Styled.Wrapper>
);

export default Title;
