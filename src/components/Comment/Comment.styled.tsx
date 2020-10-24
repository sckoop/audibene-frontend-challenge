import styled from "../../styles/styled";

const Header = styled.div`
  display: flex;
  ${({ theme }) => ({
    fontSize: theme.fontSize.small,
    color: theme.colors.comment.header,
    marginBottom: theme.spacing(),
  })};
`;
const Author = styled.a`
  ${({ theme }) => ({
    color: theme.colors.comment.username,
    paddingRight: theme.spacing(),
  })}
  text-decoration: none;
`;

const Icon = styled.span`
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;
`;

export const Styled = {
  Icon,
  Header,
  Author,
};
