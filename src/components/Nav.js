import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    height: 32px;
    background-color: #f5f5f5;
    margin: auto 1rem;
    border-radius: 8px;
    padding: 1rem;
    min-width: 200px;
    box-sizing: border-box;
  }
  .title {
    margin: 0;
    margin-left: 0.5rem;
    text-transform: capitalize;
  }
`;

const Nav = ({ title }) => {
  return (
    <Container>
      <Link className="logo" to="/" />
      <h2 className="title">{title}</h2>
    </Container>
  );
};

export default Nav;
