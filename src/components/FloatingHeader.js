import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cookies from "universal-cookie";
import { FiX, FiSettings, FiInfo, FiLifeBuoy } from "react-icons/fi";

const cookies = new Cookies();

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 0;

  border-radius: 0;
  border-top-left-radius: 8px;
  border: 1px solid #ddd;
  ${"" /* margin: 1rem; */}
  padding: 0.5rem 1rem;
  ${"" /* min-width: 300px; */}
  height: 32px;
  z-index: 1000;

  ${"" /* box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.3); */}
  background-color: ${p => p.theme.colors.neutrals[900]};

  & > a {
    & > svg {
      margin-right: 0.5rem;
      color: #888;
    }
    cursor: "pointer";
    text-decoration: none;
    color: #888;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  & > a:hover {
    color: #212121;
    & > svg {
      color: #212121;
    }
  }
  & > * {
    margin: 0;
    margin-right: 1.5rem;
  }
  & > *:last-child {
    margin: 0;
    margin-right: 0;
    color: salmon;
    & > svg {
      color: salmon
    }
  }
`;

const FloatingHeader = () => {
  return (
    <Container>
      <Link>
        <FiSettings /> Settings
      </Link>
      <Link>
        <FiInfo /> About
      </Link>
      <Link>
        <FiLifeBuoy /> Support
      </Link>
    </Container>
  );
};

export default FloatingHeader;
