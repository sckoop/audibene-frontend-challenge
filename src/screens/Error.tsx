import React, { useState } from "react";

import { Styled } from "./Error.styles";

export const ScreensError = () => {
  const [puppyImage, setPuppyImage] = useState("");

  if (!puppyImage) {
    fetch(`https://dog.ceo/api/breeds/image/random`).then(async (response) => {
      const data = await response.json();
      console.log(data);

      setPuppyImage(data.message);
    });
  }

  return (
    <>
      <h1>Something went wrong</h1>
      <div>
        It looks like we’re experiencing some technical issues. Our team is
        notified and will get right to work to fix it for you. Until then,
        please accept our apology delivered in the form of a good pupper
      </div>
      <Styled.ImageWrapper>
        {puppyImage ? <Styled.Image src={puppyImage} /> : null}
      </Styled.ImageWrapper>
    </>
  );
};
