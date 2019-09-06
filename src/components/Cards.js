import React from "react";
import styled from "styled-components";
import Card from "./Card";

const cardData = [
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  overflow-y: scroll;
`;

const Cards = ({}) => {
  return (
    <Container>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image + 300 + index}
          title={card.title}
          description={card.description}
        />
      ))}
    </Container>
  );
};

export default Cards;
