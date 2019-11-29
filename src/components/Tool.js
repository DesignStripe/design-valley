import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Row, Col } from "react-flexbox-grid";

import Tag from "./Tag";
import Button from "./Button";
import Image from "./Image";
import Link from "./Link";
import Likes from "./Likes";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";
import { FiGlobe } from "react-icons/fi";

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

function getInitialSaveStatus(id) {
  const favorites = getFavorites();
  const isSaved = favorites.some(tool => tool === id);
  return isSaved;
}

const Tool = ({ image, name, description, id, url, category, votes }) => {
  const [isSaved, setIsSaved] = useState(getInitialSaveStatus(id));

  const { socket, ip, fingerprint } = useSelector(state => state.userSession);
  const reduxVotes = useSelector(
    state => state.votes.find(vote => vote.id === id) || null
  );

  const newVotes = reduxVotes ? reduxVotes.newVotes : votes.length;

  function saveTool(id) {
    addFavorite(id);
    setIsSaved(true);
    socket.emit("like", {
      toolId: id,
      userSession: { ip, fingerprint }
    });
  }

  function removeTool(id) {
    removeFavorite(id);
    setIsSaved(false);
    socket.emit("unlike", {
      toolId: id,
      userSession: { ip, fingerprint }
    });
  }

  return (
    <Container lg={8}>
      <Row
        middle="xs"
        between="xs"
        style={{ margin: 0, marginBottom: "2rem", maxWidth: "100%" }}
      >
        <Title>{name}</Title>

        <Likes
          isLiked={isSaved}
          onClick={isSaved ? () => removeTool(id) : () => saveTool(id)}
          votes={newVotes}
        />
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
            const newTab = window.open(url + "/?ref=designvalley", "_blank");
            newTab.focus();
          }}
          style={{
            width: "100%",
            color: "white"
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
