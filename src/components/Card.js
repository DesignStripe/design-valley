import React, { useState } from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { getFavorites, addFavorite, removeFavorite } from "../utils/cookies";

import Image from "./Image";

const Container = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;

  width: 300px;
  box-sizing: border-box;

  flex: 0 1 24%;

  flex: 0 1 calc(30%);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function getInitialSaveStatus(id) {
  const favorites = getFavorites();
  const isSaved = favorites.some(tool => tool === id);
  return isSaved;
}

const Card = ({ image, title, description, id, url }) => {
  const [isSaved, setIsSaved] = useState(getInitialSaveStatus(id));

  function saveTool(id) {
    addFavorite(id);
    setIsSaved(true);
  }

  function removeTool(id) {
    removeFavorite(id);
    setIsSaved(false);
  }

  return (
    <Container>
      <Image fitContainer src={image} ratio="16:9" />
      <Row>
        <h2>{title}</h2>
        {isSaved ? (
          <FiHeart
            size={24}
            onClick={() => removeTool(id)}
            fill="red"
            stroke="none"
          />
        ) : (
          <FiHeart size={24} onClick={() => saveTool(id)} />
        )}
      </Row>
      <p>{description}</p>

      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </Container>
  );
};

export default Card;
