import styled from "../../styles/styled";

interface WrapperProps {
  hasBorder?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasBorder }) => ({
    borderLeft: hasBorder ? "1px solid " + theme.colors.comment.border : "none",
    display: "grid",
    gridRowGap: theme.spacing(2),
    padding: theme.spacing() + " " + theme.spacing(4),
  })}
`;

export const Styled = {
  Wrapper,
};
