import React from "react";

import HTMLText from "../HTMLText/HTMLText";
import IconsComment from "../Icons/Comment";
import { Styled } from "./Post.styled";

export interface PostProps {
  totalComments: number;
  text: string;
}

const Post = ({ text, totalComments }: PostProps) => {
  const commentText = totalComments === 1 ? "Comment" : "Comments";

  return (
    <Styled.Box>
      <HTMLText text={text} />
      <Styled.Comments>
        <IconsComment />
        <Styled.Amount>
          {totalComments} {commentText}
        </Styled.Amount>
      </Styled.Comments>
    </Styled.Box>
  );
};

export default Post;
