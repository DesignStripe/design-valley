import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import Tag from "./Tag";
import Button from "./Button";
import Image from "./Image";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";
import { likeTool, dislikeTool } from "../api";

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

const Title = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: rgba(0, 0, 0, 0.6);

  margin: 0;
  margin-right: 1rem;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: rgba(0, 0, 0, 0.4);

  margin: 0 0 1rem 0;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  borderr-rdius: 50%;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  zindex: 10;
  display: flex;
  justify-cntent: center;
  align-items: center;
`;

const ImageWithLike = ({ src }) => {
  return (
    <ImageWrapper>
      <IconWrapper>
        <FiHeart size={20} stroke="#333" />
      </IconWrapper>
      <Image fitContainer src={src} ratio="16:9" isSharp />
    </ImageWrapper>
  );
};

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

const Card = ({
  history,
  image,
  title,
  description,
  id,
  url,
  category,
  votes
}) => {
  const [isSaved, setIsSaved] = useState(getInitialSaveStatus(id));

  function saveTool(id) {
    addFavorite(id);
    setIsSaved(true);
    likeTool(id);
  }

  function removeTool(id) {
    removeFavorite(id);
    setIsSaved(false);
    dislikeTool(id);
  }

  return (
    <Container>
      {/* <ImageWithLike src={image} /> */}
      <Image fitContainer src={image} ratio="16:9" isSharp />

      <CardContent>
        <Row>
          <Title>{title}</Title>
          {isSaved ? (
            <FiHeart
              size={20}
              onClick={() => removeTool(id)}
              // fill="#ed2939"
              fill="#ea3c53"
              stroke="none"
            />
          ) : (
            <FiHeart
              size={20}
              onClick={() => saveTool(id)}
              stroke="rgba(0, 0, 0, 0.4)"
            />
          )}
          {votes}
        </Row>

        {/* <Description> {description}</Description> */}

        <Row>
          <Tag color={category.color}>{category.name}</Tag>
        </Row>

        <Button onClick={() => history.push(`/tool/${id}`)}>Learn More</Button>
      </CardContent>
    </Container>
  );
};

export default withRouter(Card);
