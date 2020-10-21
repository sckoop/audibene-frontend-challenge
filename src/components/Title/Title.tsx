import numeral from 'numeral';
import React from 'react';

import styled from '../../styled';

export interface TitleProps {
  text: string;
  subreddit: string;
  ups: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(3)} 0;
`;

const Subreddit = styled.h3`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing()};
`;

const TitleContainer = styled.h1`
  align-items: flex-end;
  display: flex;
  margin: 0;
`;

const Ups = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-right: ${({ theme }) => theme.spacing()};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
`;

const Title = ({ text, subreddit, ups }: TitleProps) => (
  <Wrapper>
    <Subreddit>{subreddit}</Subreddit>
    <TitleContainer>
      <Ups>{numeral(ups).format("0.0a")}</Ups>
      <Text>{text}</Text>
    </TitleContainer>
  </Wrapper>
);

export default Title;
