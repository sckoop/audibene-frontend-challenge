import styled from "../../styles/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => ({
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(4),
  })}
`;

const Subreddit = styled.h3`
  margin: 0;
  ${({ theme }) => ({
    color: theme.colors.subtitle,
    fontSize: theme.fontSize.small,
    marginBottom: theme.spacing(),
  })}
`;

const SubredditSkeleton = styled.div`
  width: 240px;
  ${({ theme }) => ({
    ".react-loading-skeleton": {
      lineHeight: theme.fontSize.small,
    },
    marginBottom: theme.spacing(2),
  })};
`;

const Title = styled.h1`
  align-items: center;
  display: flex;
  margin: 0;
`;

const TitleSkeleton = styled.div`
  ${({ theme }) => ({
    ".react-loading-skeleton": {
      lineHeight: theme.fontSize.extraLarge,
    },
  })};
`;

const Ups = styled.span`
  ${({ theme }) => ({
    fontSize: theme.fontSize.large,
    marginRight: theme.spacing(),
  })}
`;

const Text = styled.span`
  ${({ theme }) => ({
    color: theme.colors.title,
    fontSize: theme.fontSize.extraLarge,
  })}
`;

export const Styled = {
  Subreddit,
  SubredditSkeleton,
  Text,
  Title,
  TitleSkeleton,
  Wrapper,
  Ups,
};
