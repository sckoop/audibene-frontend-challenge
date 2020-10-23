import React from "react";

import { RedditComment } from "../../store";
import Comment from "./Comment";
import { Styled } from "./List.styled";

interface CommentListProps {
  comments: RedditComment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  if (comments.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      {comments.map(
        ({ author, created_utc, body_html, ups }: RedditComment) => (
          <Comment
            author={author}
            createdAt={created_utc}
            text={body_html}
            ups={ups}
          />
        )
      )}
    </Styled.Wrapper>
  );
};

export default CommentList;
