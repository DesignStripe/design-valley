import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import HeaderBanner from "../components/HeaderBanner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = ({
  featured,
  popular,
  favorites,
  latest,
  isFeaturedReady,
  isPopularReady,
  isFavoritesReady,
  isLatestReady
}) => {
  return (
    <Container>
      <HeaderBanner />
      <Cards tools={featured} title="Featured" isReady={isFeaturedReady} />
      <Cards
        tools={latest}
        title="Latest"
        isReady={isLatestReady}
        isNew={true}
        hasMore
        moreLink="/latest"
      />
      <Cards
        tools={popular}
        title="Popular"
        isReady={isPopularReady}
        hasMore
        moreLink="/popular"
      />
      {/* <Cards tools={favorites} title="Favorites" isReady={isFavoritesReady} /> */}
    </Container>
  );
};

export default Home;
