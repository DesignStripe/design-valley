import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Col } from "react-flexbox-grid";

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

const Title = styled.h2`
  height: 32px;
  margin: 1rem 0 1.5rem 1rem;
`;

const Cards = ({ title, tools }) => {
  return (
    <Col>
      {title && <Title>{title}</Title>}
      <Container>
        {tools.map((tool, index) => (
          <Card
            key={tool._id}
            id={tool._id}
            image={tool.thumbnail}
            url={tool.url}
            title={tool.name}
            category={tool.category}
            description={tool.description}
          />
        ))}
      </Container>
    </Col>
  );
};

export default Cards;
