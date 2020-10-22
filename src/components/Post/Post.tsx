import React from "react";

import { IconsComment } from "../Icons/Comment";
import { Styled } from "./Post.styled";

export interface PostProps {
  amountOfComments: number;
  text: string;
}

const htmlDecode = (text: string) => {
  var e = document.createElement("div");
  e.innerHTML = text;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
};

const Post = ({ text, amountOfComments }: PostProps) => {
  const displayText = htmlDecode(text)
    .replace("<!-- SC_ON -->", "")
    .replace("<!-- SC_OFF -->", "");

  const commentText = amountOfComments > 1 ? "Comments" : "Comment";

  return (
    <Styled.Box>
      <Styled.Text dangerouslySetInnerHTML={{ __html: displayText }} />
      <Styled.Comments>
        <IconsComment />
        <Styled.Amount>
          {amountOfComments} {commentText}
        </Styled.Amount>
      </Styled.Comments>
    </Styled.Box>
  );
};

export default Post;
