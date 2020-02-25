import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import { rgba } from "polished";

import Tag from "../components/Tag";
import Button from "../components/Button";
import Image from "../components/Image";
import Link from "../components/Link";
import Likes from "../components/Likes";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";
import { FiGlobe, FiTwitter } from "react-icons/fi";

const Container = styled(Col)`
  border-radius: 8px;
  background-color: #fff;

  padding: 2rem !important;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary[900]};
  margin: 0;
  margin-right: 1rem;
`;

const Description = styled.p`
  display: -webkit-box;
  ${
    "" /* -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; */
  }

  color: ${props => props.theme.colors.primary[700]};


  margin: 0 0 1rem 0;
`;

const ShareWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  color: ${p => p.theme.colors.primary[500]};
  border-radius: 8px;
  cursor: pointer;
  margin: 0;
  margin-right: 1rem;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${p => rgba(p.theme.colors.primary[500], 0.05)};
  }
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function tweet(message) {
  return (
    "https://twitter.com/intent/tweet?text=" +
    message
      .split(" ")
      .join("%20")
      .split("\n")
      .join("%0A")
  );
}

function getInitialSaveStatus(id) {
  const favorites = getFavorites();
  const isSaved = favorites.some(tool => tool === id);
  return isSaved;
}

const Tool = ({ image, name, description, id, url, category, votes }) => {
  const [isSaved, setIsSaved] = useState(getInitialSaveStatus(id));

  useEffect(() => {
    setIsSaved(getInitialSaveStatus(id));
  }, [id]);

  const { socket, ip, fingerprint, userInfo } = useSelector(
    state => state.userSession
  );
  const reduxVotes = useSelector(
    state => state.votes.find(vote => vote.id === id) || null
  );

  const newVotes = reduxVotes ? reduxVotes.newVotes : votes.length;

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
    <Container lg={8}>
      <Row
        top="xs"
        between="xs"
        style={{ margin: 0, marginBottom: "2rem", maxWidth: "100%" }}
      >
        <Title>{name}</Title>

        <Row middle="xs">
          <ShareWrapper
            target="_blank"
            href={tweet(
              `${name} - ${description}\nvia designvalley.club\n\n${url}/?ref=designvalley`
            )}
          >
            <FiTwitter /> Share
          </ShareWrapper>

          <Likes
            isLiked={isSaved}
            onClick={isSaved ? () => removeTool(id) : () => saveTool(id)}
            votes={newVotes}
          />
        </Row>
      </Row>
      <Col style={{ padding: 0, paddingBottom: "2rem" }}>
        <Image fitContainer src={image} ratio="16:9" />
      </Col>

      <Col>
        <Description>{description}</Description>
        <Link to={`/category/${category._id}`}>
          <Tag color={category.color}>{category.name}</Tag>
        </Link>
      </Col>
      <Col></Col>
      <Col style={{ marginTop: "2rem" }}>
        <Button
          onClick={() => {
            const hasTrailingSlash = url.slice(-1) === "/";
            const refLink = hasTrailingSlash
              ? "?ref=designvalley"
              : "/?ref=designvalley";
            const newTab = window.open(url + refLink, "_blank");
            newTab.focus();
          }}
          style={{
            width: "100%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FiGlobe style={{ marginRight: ".5rem" }} />
          Visit Website
        </Button>
      </Col>
    </Container>
  );
};

export default Tool;
