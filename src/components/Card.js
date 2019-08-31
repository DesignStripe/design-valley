import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;

  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

export default Card;
