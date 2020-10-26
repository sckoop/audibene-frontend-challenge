import React from "react";

import { RedditComment } from "../../store";
import Skeleton from "../Skeleton/Skeleton";
import Comment from "./Comment";
import { Styled } from "./List.styled";

interface CommentListProps {
  comments?: RedditComment[];
  hasBorder?: boolean;

  isLoading?: boolean;
}

const CommentList = ({ comments, hasBorder, isLoading }: CommentListProps) => {
  if (isLoading) {
    return (
      <Styled.Wrapper>
        <Skeleton count={5} />
      </Styled.Wrapper>
    );
  }

  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper hasBorder={hasBorder}>
      {comments.map(
        ({
          author,
          created_utc,
          body_html,
          ups,
          comments: subComments,
          id,
          isDeleted,
        }: RedditComment) => (
          <Comment
            key={id}
            author={author}
            createdAt={created_utc}
            text={body_html}
            ups={ups}
            comments={subComments}
            id={id}
            isDeleted={isDeleted}
          />
        )
      )}
    </Styled.Wrapper>
  );
};

export default CommentList;
