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
  flex-direction: column;
`;

const Home = ({ match }) => {
  return (
    <Container>
      <h2>Featured </h2>
      <h2>Popular </h2>
      <h2>Favorite</h2>
    </Container>
  );
};

export default Home;
