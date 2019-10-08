import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  ${"" /* overflow-y: scroll; */}
  width: 100%;
  min-height: 308px;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const Cards = ({ tools }) => {
  return (
    <Container>
      {tools.map((tool, index) => (
        <Card
          key={tool.id}
          id={tool.id}
          image={tool.image}
          url={tool.url}
          title={tool.name}
          category={tool.category}
          description={tool.description}
        />
      ))}
    </Container>
  );
};

export default Cards;
