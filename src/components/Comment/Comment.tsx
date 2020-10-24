import formatDistance from "date-fns/formatDistance";
import React from "react";

import { RedditComment } from "../../store";
import { formatUps } from "../../utils";
import HTMLText from "../HTMLText/HTMLText";
import { Styled } from "./Comment.styled";

interface CommentProps extends Pick<RedditComment, "author" | "ups"> {
  text: string;
  createdAt: number;
}

const Comment = ({ author, text, createdAt, ups }: CommentProps) => {
  const formattedCreatedAt = formatDistance(
    new Date(createdAt * 1000),
    new Date(),
    { addSuffix: true }
  );

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Author
          href={`https://www.reddit.com/user/${author}`}
          target="_blank"
        >
          {author}
        </Styled.Author>
        <span>
          {formatUps(ups)} - {formattedCreatedAt}
        </span>
      </Styled.Header>
      <HTMLText text={text} />
    </Styled.Wrapper>
  );
};

export default Comment;
