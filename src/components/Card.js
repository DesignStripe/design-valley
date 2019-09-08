import React from "react";
import styled from "styled-components";

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

const Card = ({ image, title, description }) => {
  return (
    <Container>
      <Image fitContainer src={image} ratio="16:9" />
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default Card;
