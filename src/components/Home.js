import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = ({
  featured,
  popular,
  favorites,
  isFeaturedReady,
  isPopularReady,
  isFavoritesReady
}) => {
  return (
    <Container>
      <Cards tools={featured} title="Featured" isReady={isFeaturedReady} />
      <Cards tools={popular} title="Popular" isReady={isPopularReady} />
      <Cards tools={favorites} title="Favorites" isReady={isFavoritesReady} />
    </Container>
  );
};

export default Home;
