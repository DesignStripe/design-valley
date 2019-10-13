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
      <Cards tools={featured} title="Featured" />
      <Cards tools={popular} title="Popular" />
      <Cards tools={favorite} title="Favorites" />
    </Container>
  );
};

export default Home;
