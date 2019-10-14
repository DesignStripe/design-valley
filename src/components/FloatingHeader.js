import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FiSettings, FiInfo, FiLifeBuoy } from "react-icons/fi";
import me from "../assets/me.jpeg";
import Avatar from "./Avatar";

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
  border: 1px solid ${p => p.theme.colors.neutrals[300]};
  padding: 0.5rem 1rem;
  height: 32px;
  z-index: 1000;

  background-color: ${p => p.theme.colors.neutrals[100]};

  & > a {
    & > svg {
      margin-right: 0.5rem;
      color: ${p => p.theme.colors.neutrals[600]};
    }
    cursor: "pointer";
    text-decoration: none;
    color: ${p => p.theme.colors.neutrals[600]};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  & > a:hover {
    color: ${p => p.theme.colors.neutrals[900]};
    & > svg {
      color: ${p => p.theme.colors.neutrals[900]};
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
      color: salmon;
    }
  }
`;

const FloatingHeader = () => {
  return (
    <Container>
      <Avatar
        src={me}
        onClick={() => window.open("https://twitter.com/d__raptis", "_blank")}
      />

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
