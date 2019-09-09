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
      <h2 style={{ margin: "1rem 0 0 1rem" }}>Featured </h2>
      <Cards tools={featured} />
      <h2 style={{ margin: "1rem 0 0 1rem" }}>Popular </h2>
      <Cards tools={popular} />
      <h2 style={{ margin: "1rem 0 0 1rem" }}>Favorite</h2>
      <Cards tools={favorite} />
    </Container>
  );
};

export default Home;
