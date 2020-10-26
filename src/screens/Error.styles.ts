import styled from "../styles/styled";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const Image = styled.img`
  max-width: 50vh;
  max-height: 50vh;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
`;

export const Styled = {
  ImageWrapper,
  Image,
};
