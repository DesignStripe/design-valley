import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { rgba } from "polished";

const StyledButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;
  color: ${p => p.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  font-family: Rubik, sans-serif;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover,
  &:focus,
  &:active {
    border: none;
    box-shadow: none;
    background-color: none;
    outline: none;
    background: ${p => rgba(p.theme.colors.primary[100], 0.25)};
  }
`;

const BackButton = ({ match }) => {
  const history = useHistory();

  return (
    <StyledButton onClick={() => history.goBack()}>
      <FiArrowLeft style={{ marginRight: "0.5rem" }} /> Back
    </StyledButton>
  );
};

export default BackButton;
