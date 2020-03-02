import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import FirstMedal from "../Icons/FirstMedal";
import prototyprLogo from "../../assets/prototypr.png";

const Container = styled.a`
  padding: 1rem;
  margin-left: 0;
  background-color: ${props => props.color};
  color: #212121;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  width: 300px;

  &,
  &:focus,
  &:hover,
  &:active {
    box-shadow: none;
    outline: none;
    text-decoration: none;
  }
`;

export const ProductHunt = ({}) => {
  return (
    // <Container
    //   color={"gold"}
    //   href="https://www.producthunt.com/posts/designvalley"
    //   rel="noreferrer"
    //   target="_blank"
    // >
    //   DesignValley was{" "}
    //   <FirstMedal color="#212121" size={32} style={{ margin: "0 0.5rem" }} /> on
    //   Product Hunt!
    // </Container>
    <a
      href="https://www.producthunt.com/posts/designvalley?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-designvalley"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=184722&theme=dark&period=daily"
        alt="DesignValley - Discover, vote and share your favorite design tools 🥇 | Product Hunt Embed"
        style={{ width: "250px", height: "54px" }}
        width="250px"
        height="54px"
      />
    </a>
  );
};

export const Prototypr = () => {
  return (
    <a href="https://www.prototypr.io/toolbox/designvalley/" target="_blank">
      <img
        src={prototyprLogo}
        alt="DesignValley on Prototypr"
        style={{ width: "150px", height: "34px", padding: "10px 50px" }}
        width="150px"
        height="34px"
      />
    </a>
  );
};
