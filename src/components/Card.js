import React, { useState } from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { Button } from "semantic-ui-react";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";

import Image from "./Image";

const Container = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;

  width: 100%;
  box-sizing: border-box;
  @media (min-width: 40rem) {
    width: calc(50% - 2rem);
  }
  @media (min-width: 56rem) {
    width: calc(33.33% - 2rem);
  }
  @media (min-width: 64rem) {
    width: calc(25% - 2rem);
  }

  ${"" /* flex: 0 1 24%; flex: 0 1 calc(30%); */}

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const Title = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin: 0;
  margin: 1rem 0;
  margin-right: 1rem;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin: 0;
  margin-bottom: 2rem;
`;

const CustomButton = styled(Button)`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;

  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    background 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;

  padding: 12px 0;
  font-family: Rubik, "sans-serif";

  &:hover {
    background-color: #cacbcd;
    background-image: none;
    box-shadow: 0 0 0 1px transparent inset,
      0 0 0 0 rgba(34, 36, 38, 0.15) inset;
    color: rgba(0, 0, 0, 0.8);
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
      <CardContent>
        <Row>
          <Title>{title}</Title>
          {isSaved ? (
            <FiHeart
              size={20}
              onClick={() => removeTool(id)}
              fill="red"
              stroke="none"
            />
          ) : (
            <FiHeart size={20} onClick={() => saveTool(id)} />
          )}
        </Row>
        <Description>{description}</Description>

        {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
        <CustomButton
          onClick={() => {
            const newTab = window.open(url, "_blank");
            newTab.focus();
          }}
        >
          Visit tool
        </CustomButton>
        {/* </a> */}
      </CardContent>
    </Container>
  );
};

export default Card;
