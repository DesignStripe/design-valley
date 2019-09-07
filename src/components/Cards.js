import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { fetchToolByCategory } from "../api/requests";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  overflow-y: scroll;
  width: 100%;
  margin-right: 1rem;
`;

const Cards = ({ match }) => {
  const { id } = match.params;
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchToolByCategory(id).then(res => setTools(res));
  }, [id]);

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
