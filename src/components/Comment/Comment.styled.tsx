import styled from "../../styles/styled";

const Header = styled.div`
  ${({ theme }) => ({
    fontSize: theme.fontSize.small,
    color: theme.colors.comment.header,
    paddingBottom: theme.spacing(),
  })}
`;
const Author = styled.a`
  ${({ theme }) => ({
    color: theme.colors.comment.username,
    paddingRight: theme.spacing(),
  })}
  text-decoration: none;
`;

const Text = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing()};
`;

export const Styled = {
  Header,
  Author,
  Text,
};
