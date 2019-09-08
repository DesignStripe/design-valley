import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  overflow-y: scroll;
  width: 100%;
  margin-right: 1rem;
`;

const Cards = ({ tools }) => {
  return (
    <Container>
      {tools.map((card, index) => (
        <Card
          key={index}
          image={card.image + 300 + index}
          title={card.name}
          description={card.description}
        />
      ))}
    </Container>
  );
};

export default Cards;
