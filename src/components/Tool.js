import React, { useState } from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

import Tag from "./Tag";
import Button from "./Button";
import Image from "./Image";
import { Row, Col, Grid } from "react-flexbox-grid";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";

const Container = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  ${"" /* padding: 1rem; */}
  margin: 1rem;
  margin-top: 0;
  margin-bottom: 2rem;

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

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;

  & > * {
    margin-bottom: 1rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  color: #212121;
  margin: 0;
  margin-right: 1rem;
`;

const Description = styled.p`
  display: -webkit-box;
  ${"" /* -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; */}

  color: rgba(0, 0, 0, 0.4);

  margin: 0 0 1rem 0;
`;

function getInitialSaveStatus(id) {
  const favorites = getFavorites();
  const isSaved = favorites.some(tool => tool === id);
  return isSaved;
}

const Card = ({ image, name, description, id, url, category }) => {
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
    <Col style={{ margin: "1rem" }}>
      <Row
        middle="xs"
        // between="xs"
        style={{ margin: 0, marginBottom: "1rem", maxWidth: "100%" }}
      >
        <Title>{name}</Title>
        {isSaved ? (
          <FiHeart
            size={28}
            onClick={() => removeTool(id)}
            // fill="#ed2939"
            fill="#ea3c53"
            stroke="none"
          />
        ) : (
          <FiHeart
            size={28}
            onClick={() => saveTool(id)}
            stroke="rgba(0, 0, 0, 0.4)"
          />
        )}
      </Row>
      <Col xl={8} style={{ padding: 0, paddingBottom: "2rem" }}>
        <Image fitContainer src={image} ratio="16:9" />
      </Col>

      <Col>
        <Description>{description}</Description>
        <Tag color={category.color}>{category.name}</Tag>
      </Col>
      <Col></Col>
      <Col style={{ marginTop: "2rem" }}>
        <Button
          onClick={() => {
            const newTab = window.open(url + "/?ref=designmate", "_blank");
            newTab.focus();
          }}
          style={{ width: "100%" }}
        >
          Visit Website
        </Button>
      </Col>
    </Col>
  );
};

export default Card;
