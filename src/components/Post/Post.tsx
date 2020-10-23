import React from "react";

import { IconsComment } from "../Icons/Comment";
import { Styled } from "./Post.styled";

export interface PostProps {
  totalComments: number;
  text: string;
}

const htmlDecode = (text: string) => {
  var e = document.createElement("div");
  e.innerHTML = text;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
};

const Post = ({ text, totalComments }: PostProps) => {
  const displayText = htmlDecode(text)
    .replace("<!-- SC_ON -->", "")
    .replace("<!-- SC_OFF -->", "");

  const commentText = totalComments === 1 ? "Comment" : "Comments";

  return (
    <Styled.Box>
      <Styled.Text dangerouslySetInnerHTML={{ __html: displayText }} />
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
