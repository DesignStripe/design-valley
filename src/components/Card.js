import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FiHeart, FiStar } from "react-icons/fi";
import { useSelector } from "react-redux";

import Link from "./Link";
import Tag from "./Tag";
import Button from "./Button";
import Image from "./Image";
import theme from "../utils/theme";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";
import { rgba } from "polished";
import Likes from "./Likes";

const Container = styled.div`
  border-radius: 8px;
  background-color: #fff;
  ${"" /* box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 8px ${props => props.theme.colors.primary[500]}11; */}

  ${"" /* padding: 1rem; */}
  margin: 0.5rem;
  display: inline-block;

  width: calc(100% - 1rem);
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
  @media (min-width: 128rem) {
    width: calc(20% - 2rem);
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 16px ${props => props.theme.colors.primary[500]}22;

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
  & > *:nth-child(1) {
    cursor: pointer;
  }
  & > *:nth-child(2) {
    margin-bottom: 0.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${props => props.theme.colors.primary[500]};

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
  margin: 0.5rem;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #fccb82aa;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    fill: #f99a0b;
    stroke: #f99a0b;
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

const ImageWithLike = ({ onClick, src, isFeatured }) => {
  return (
    <ImageWrapper onClick={onClick}>
      {isFeatured && (
        <IconWrapper>
          <FiStar size={20} />
        </IconWrapper>
      )}
      <Image fitContainer src={src} ratio="16:9" isSharp />
    </ImageWrapper>
  );
};

const Card = ({
  history,
  image,
  title,
  description,
  id,
  url,
  category,
  votes,
  isFeatured
}) => {
  const [isSaved, setIsSaved] = useState(getInitialSaveStatus(id));
  const { socket, ip, fingerprint, userInfo } = useSelector(
    state => state.userSession
  );
  const reduxVotes = useSelector(
    state => state.votes.find(vote => vote.id === id) || null
  );

  const newVotes = reduxVotes ? reduxVotes.newVotes : votes;

  function saveTool(id) {
    addFavorite(id);
    setIsSaved(true);
    socket.emit("like", {
      toolId: id,
      userSession: { ip, fingerprint, userInfo }
    });
  }

  function removeTool(id) {
    removeFavorite(id);
    setIsSaved(false);
    socket.emit("unlike", {
      toolId: id,
      userSession: { ip, fingerprint, userInfo }
    });
  }

  return (
    <Container>
      {/* <ImageWithLike src={image} /> */}
      <CardContent>
        <ImageWithLike
          isFeatured={isFeatured}
          src={image}
          onClick={() => history.push(`/tool/${id}`)}
        />
        {/* <Image
          fitContainer
          src={image}
          ratio="16:9"
          isSharp
          onClick={() => history.push(`/tool/${id}`)}
        /> */}

        <Row>
          <Title>{title}</Title>

          <Likes
            isLiked={isSaved}
            onClick={isSaved ? () => removeTool(id) : () => saveTool(id)}
            votes={newVotes}
          />
        </Row>

        {/* <Description> {description}</Description> */}
        {/* 
        <Row>
          <Link to={`/category/${category._id}`}>
            <Tag color={category.color}>{category.name}</Tag>
          </Link>
        </Row> */}

        {/* <Button onClick={() => history.push(`/tool/${id}`)}>Learn More</Button> */}
      </CardContent>
    </Container>
  );
};

export default withRouter(Card);
