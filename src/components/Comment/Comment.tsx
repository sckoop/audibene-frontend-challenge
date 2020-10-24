import formatDistance from "date-fns/formatDistance";
import React from "react";

import { RedditComment } from "../../store";
import { formatUps } from "../../utils";
import HTMLText from "../HTMLText/HTMLText";
import { Styled } from "./Comment.styled";
import CommentList from "./List";

interface CommentProps
  extends Pick<RedditComment, "author" | "ups" | "comments"> {
  text: string;
  createdAt: number;
}

const Comment = ({ author, text, createdAt, ups, comments }: CommentProps) => {
  const formattedCreatedAt = formatDistance(
    new Date(createdAt * 1000),
    new Date(),
    { addSuffix: true }
  );

  return (
    <>
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
      <Styled.Text>
        <HTMLText text={text} />
      </Styled.Text>
      <CommentList comments={comments} hasBorder />
    </>
  );
};

export default Comment;
