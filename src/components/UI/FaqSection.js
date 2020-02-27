import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";

const Container = styled(Col)`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary[900]};
`;
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary[900]};
`;

const Content = styled.div`
  margin-left: 0.5rem;
  & > * {
    margin-bottom: 1rem;
  }
  & > *:last-child {
    margin-bottom: 3rem;
  }
`;

const FaqSection = ({ title, paragraphs, before, after }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        {before}
        {paragraphs.map(paragraph => (
          <Text>{paragraph}</Text>
        ))}
        {after}
      </Content>
    </Container>
  );
};

export default FaqSection;
