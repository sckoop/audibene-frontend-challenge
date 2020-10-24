import styled from "../../styles/styled";

interface WrapperProps {
  hasBorder?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasBorder }) => ({
    borderLeft: hasBorder ? "1px solid " + theme.colors.comment.border : "none",
    display: "grid",
    gridRowGap: theme.spacing(2),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(4),
    paddingRight: "0",
    paddingTop: theme.spacing(),
  })}
`;

export const Styled = {
  Wrapper,
};
