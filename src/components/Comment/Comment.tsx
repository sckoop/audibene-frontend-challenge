import formatDistance from "date-fns/formatDistance";
import React from "react";

import { RedditComment } from "../../store";
import { formatUps } from "../../utils";
import HTMLText from "../HTMLText/HTMLText";
import IconsDelete from "../Icons/Delete";
import { Styled } from "./Comment.styled";
import CommentList from "./List";

interface CommentProps
  extends Pick<
    RedditComment,
    "author" | "ups" | "comments" | "id" | "isDeleted"
  > {
  text: string;
  createdAt: number;
}

const Comment = ({
  author,
  text,
  createdAt,
  ups,
  comments,
  isDeleted,
  id,
}: CommentProps) => {
  const formattedCreatedAt = formatDistance(
    new Date(createdAt * 1000),
    new Date(),
    { addSuffix: true }
  );

  const deleteIcon = isDeleted ? null : (
    <Styled.Icon>
      <IconsDelete />
    </Styled.Icon>
  );

  return (
    <div>
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
        {deleteIcon}
      </Styled.Header>
      <HTMLText text={text} />
      <CommentList comments={comments} hasBorder />
    </div>
  );
};

export default Comment;
