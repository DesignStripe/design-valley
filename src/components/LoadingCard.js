import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import Likes from "./Likes";

const Container = styled.div`
  border-radius: 8px;
  background-color: #fff;
  margin: 0.5rem;
  display: inline-block;

  width: calc(100% - 1rem);
  box-sizing: border-box;
  @media (min-width: 40rem) {
    width: calc(50% - 2rem);
  }
  @media (min-width: 56rem) {
    width: calc(33.33% - 2rem);
  }
  @media (min-width: 64rem) {
    width: calc(25% - 2rem);
  }
  @media (min-width: 128rem) {
    width: calc(20% - 2rem);
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 16px ${props => props.theme.colors.primary[500]}22;

    transform: translateY(-1px);
  }
`;

const EmptyCardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;

  & > * {
    margin-bottom: 1rem;
  }
  & > *:nth-child(1) {
    cursor: pointer;
  }
  & > *:nth-child(2) {
    margin-bottom: 0.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const gradientMovement = keyframes`
  0% {
    background-position:0% 50%
  }
  50% {
    background-position:100% 50%
  }
  100% {
    background-position:0% 50%
  }
`;

const Title = styled.div`
  height: 1rem;
  width: 40%;
  background-color: ${p => p.theme.colors.primary[400]};
  border-radius: 4px;
  animation: ${gradientMovement} 3s ease-in-out infinite;
  background: linear-gradient(
    270deg,
    ${p => p.theme.colors.primary[100]},
    ${p => rgba(p.theme.colors.primary[100], 0.2)}
  );
  background-size: 400% 400%;

  margin: 0;
  margin-right: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: ${(100 * 9) / 16}%;
  animation: ${gradientMovement} 3s ease-in-out infinite;
  background: linear-gradient(
    270deg,
    ${p => p.theme.colors.primary[100]},
    ${p => rgba(p.theme.colors.primary[100], 0.2)}
  );
  background-size: 400% 400%;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const EmptyCard = ({}) => {
  return (
    <Container>
      <EmptyCardContent>
        <ImageWrapper />
        <Row>
          <Title />
          <Likes isLiked={false} votes={/*Math.round(Math.random() * 10)*/ 0} />
        </Row>
      </EmptyCardContent>
    </Container>
  );
};

export default EmptyCard;
