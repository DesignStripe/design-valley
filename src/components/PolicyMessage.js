import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cookies from "universal-cookie";
import { FiX } from "react-icons/fi";

const cookies = new Cookies();

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 1rem auto;
  border-radius: 8px;
  border: 1px solid #f4f4f4;
  padding: 0.5rem 1rem;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.3);
  background-color: ${p => p.theme.colors.neutrals[900]};
  z-index: 1000;
  min-width: 300px;
  & > *:first-child {
    margin: 0;
    margin-right: 1rem;
  }
`;

const PolicyLabel = () => {
  const [isAccepted, setIsAccepted] = useState(true);

  useEffect(() => {
    const cookie = cookies.get("policy");
    if (cookie) {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
  }, []);

  function setCookie() {
    cookies.set("policy", true);
    setIsAccepted(true);
  }

  if (isAccepted) return null;

  return (
    <Container>
      <p>By using this site, DesignValley bakes some tasty 🍪</p>
      <FiX onClick={setCookie} color="#aaa" style={{ cursor: "pointer" }} />
    </Container>
  );
};

export default PolicyLabel;
