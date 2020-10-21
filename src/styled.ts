import styled, { CreateStyled } from '@emotion/styled/macro';

export type Theme = {
  colors: {
    subtitle: string;
    text: string;
    title: string;
    username: string;
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
