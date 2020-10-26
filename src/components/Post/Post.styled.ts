import styled from "../../styles/styled";

const Amount = styled.div`
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

const Box = styled.div`
  ${({ theme }) => ({
    background: theme.colors.post.textBackground,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(3) + " " + theme.spacing(4),
  })}
`;

const Text = styled.div`
  *:first-of-type {
    margin-top: 0;
  }
  *:last-of-type {
    margin-bottom: 0;
  }
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const CommentsSkeleton = styled.div`
  margin-left: ${({ theme }) => theme.spacing(1)};
  width: 100px;
`;

export const Styled = {
  Amount,
  Box,
  Comments,
  CommentsSkeleton,
  Text,
};
