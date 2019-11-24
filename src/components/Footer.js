import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import Avatar from "./Avatar";
import CallToAction from "./CallToAction";
// import me from "../assets/me.jpeg";

const Container = styled.div`
  ${"" /* background-color: ${props => props.theme.colors.primary[500]}; */}
  border: ${props => props.theme.colors.primary[500]} 2px solid;
  color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: no-wrap;
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  & > p {
    color: ${props => props.theme.colors.primary[500]};
    margin: 0;
    margin-bottom: 1rem;
  }
  & > p > b > a,
  & > p > b > a:active,
  & > p > b > a:hover,
  & > p > b > a:link,
  & > p > b > a:focus,
  & > p > b > a:visited {
    color: ${props => props.theme.colors.primary[500]};
    font-weight: bold;
    text-decoration: none !important;
  }
  & > small {
    color: ${props => props.theme.colors.primary[200]};
  }
`;

const EMOJIS = ["🌯", "🍺", "💦", "🍹", "🤙"];
const INTERVAL = 1000;

const Footer = ({}) => {
  const [emoji, setEmoji] = useState("🌯");

  useEffect(() => {
    emojiInterval();
    setInterval(emojiInterval, EMOJIS.length * INTERVAL);
  }, []);

  const emojiInterval = () => {
    EMOJIS.forEach((item, index) => {
      setTimeout(() => setEmoji(item), index * INTERVAL);
    });
  };

  return (
    <Container>
      <CallToAction />

      <Credits>
        <p>
          Made with {emoji} by{" "}
          <b>
            <a href="https://twitter.com/d__raptis">Jim Raptis</a>
          </b>
        </p>
        {/* <Avatar src={me} /> */}
        <small>
          © DesignValley {new Date().getFullYear()}. All rights reserved
        </small>
      </Credits>
    </Container>
  );
};

export default Footer;
