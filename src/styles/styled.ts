import styled, { CreateStyled } from "@emotion/styled/macro";

export type Theme = {
  colors: {
    background: string;
    post: {
      background: string;
      textBackground: string;
    };
    comment: {
      border: string;
      header: string;
      username: string;
    };
    skeleton: {
      background: string;
      loadingIndicator: string;
    };
    subtitle: string;
    text: string;
    title: string;
  };
  fontSize: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  spacing: (size?: number) => string;
};

export default styled as CreateStyled<Theme>;
