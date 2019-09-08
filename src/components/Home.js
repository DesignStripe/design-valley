import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = ({ featured, popular, favorite }) => {
  return (
    <Container>
      <h2>Featured </h2>
      <Cards tools={featured} />
      <h2>Popular </h2>
      <Cards tools={popular} />
      <h2>Favorite</h2>
      <Cards tools={favorite} />
    </Container>
  );
};

export default Home;
