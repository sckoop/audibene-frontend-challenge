import React from "react";
import ReactSkeleton, { SkeletonProps } from "react-loading-skeleton";

import styled from "../../styles/styled";

const Wrapper = styled.span`
  ${({ theme }) => ({
    ".react-loading-skeleton": {
      backgroundColor: theme.colors.skeleton.background,
      backgroundImage: `linear-gradient(90deg,${theme.colors.skeleton.background},${theme.colors.skeleton.loadingIndicator},${theme.colors.skeleton.background})`,
    },
  })}
`;

const Skeleton = (props: SkeletonProps) => (
  <Wrapper>
    <ReactSkeleton {...props} />
  </Wrapper>
);

export default Skeleton;
