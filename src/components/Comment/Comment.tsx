import React from "react";

import { RedditComment } from "../../store";
import HTMLText from "../HTMLText/HTMLText";
import { Styled } from "./Comment.styled";

interface CommentProps extends Pick<RedditComment, "author" | "ups"> {
  text: string;
  createdAt: number;
}

const Comment = ({ author, text, createdAt, ups }: CommentProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Author>{author}</Styled.Author>
        <Styled.Info>
          {ups} - {createdAt}
        </Styled.Info>
      </Styled.Header>
      <HTMLText text={text} />
    </Styled.Wrapper>
  );
};

export default Comment;
