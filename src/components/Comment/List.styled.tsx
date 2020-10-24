import styled from "../../styles/styled";

const Wrapper = styled.div`
  ${({ theme }) => ({
    margin: theme.spacing(3) + " " + theme.spacing(4),
  })}
`;

export const Styled = {
  Wrapper,
};
