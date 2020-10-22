import numeral from "numeral";
import React from "react";

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
      <Styled.Ups>{numeral(ups).format("0.0a")}</Styled.Ups>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Title>
  </Styled.Wrapper>
);

export default Title;
