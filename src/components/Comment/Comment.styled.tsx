import styled from "../../styles/styled";

const Wrapper = styled.div`
  ${({ theme }) => ({
    // margin: theme.spacing(3) + " 0",
  })}
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  } ;
`;
const Header = styled.div`
  ${({ theme }) => ({
    fontSize: theme.fontSize.small,
    color: theme.colors.comment.header,
    marginBottom: theme.spacing(),
  })}
`;
const Author = styled.a`
  ${({ theme }) => ({
    color: theme.colors.comment.username,
    marginRight: theme.spacing(),
  })}
  text-decoration: none;
`;

export const Styled = {
  Wrapper,
  Header,
  Author,
};
