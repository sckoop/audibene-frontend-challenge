import styled from "./styles/styled";

const Page = styled.div`
  ${({ theme }) => ({
    background: theme.colors.background,
    borderRadius: theme.spacing(0.5),
    color: theme.colors.text,
    fontSize: theme.fontSize.medium,
    padding: theme.spacing(3) + " " + theme.spacing(9),
    margin: theme.spacing(2) + " " + theme.spacing(6),
  })}
  @media (min-width: 1280px) {
    ${({ theme }) => ({
      margin: theme.spacing(16) + " " + theme.spacing(26),
    })}
  }
`;

const Container = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.post.background,
    borderRadius: theme.spacing(0.5),
    display: "grid",
    gridRowGap: theme.spacing(2),
    padding: theme.spacing(3),
  })};
`;

export const Styled = {
  Container,
  Page,
};
