import React from "react";

import styled from "../../styles/styled";

interface HTMLTextProps {
  text: string;
}

const Text = styled.span`
  *:first-of-type {
    margin-top: 0;
  }
  *:last-of-type {
    margin-bottom: 0;
  }
`;

const htmlDecode = (text: string) => {
  var e = document.createElement("div");
  e.innerHTML = text;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
};

const HTMLText = ({ text }: HTMLTextProps) => {
  const displayText = htmlDecode(text)
    .replace("<!-- SC_ON -->", "")
    .replace("<!-- SC_OFF -->", "");

  // This implementation assumes that the given html was already verified when the
  // backend stored the post in the database. Usually it's really dangerous to
  // render user entered content directly as html as it enables CSS attacks.
  return <Text dangerouslySetInnerHTML={{ __html: displayText }} />;
};

export default HTMLText;
