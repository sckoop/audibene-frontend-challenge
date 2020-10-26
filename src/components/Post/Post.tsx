import React from "react";

import HTMLText from "../HTMLText/HTMLText";
import IconsComment from "../Icons/Comment";
import Skeleton from "../Skeleton/Skeleton";
import { Styled } from "./Post.styled";

export interface PostProps {
  totalComments?: number;
  text?: string;
  isLoading?: boolean;
}

const Post = ({ text = "", totalComments, isLoading }: PostProps) => {
  const commentText = totalComments === 1 ? "Comment" : "Comments";

  if (isLoading) {
    return (
      <Styled.Box>
        <Skeleton count={3} />
        <Styled.Comments>
          <IconsComment />
          <Skeleton wrapper={Styled.CommentsSkeleton} />
        </Styled.Comments>
      </Styled.Box>
    );
  }

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
