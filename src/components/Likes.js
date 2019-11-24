import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import theme from "../utils/theme";
import { rgba } from "polished";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${rgba(theme.colors.primary[500], 0.05)};
  padding: 0.5rem;
  color: ${theme.colors.primary[500]};
  border-radius: 8px;
  cursor: pointer;

  svg {
    margin-left: 0.5rem;
  }
`;

const Likes = ({ isLiked, onClick, votes }) => {
  return (
    <Container onClick={onClick}>
      {votes}
      {isLiked ? (
        <FiHeart size={20} fill={theme.colors.primary[500]} stroke="none" />
      ) : (
        <FiHeart size={20} stroke={rgba(theme.colors.primary[500], 0.5)} />
      )}
    </Container>
  );
};

export default withRouter(Likes);
