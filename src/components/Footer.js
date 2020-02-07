import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rgba } from "polished";

import CallToAction from "./CallToAction";
// import me from "../assets/me.jpeg";

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 4px solid ${p => rgba(p.theme.colors.primary[100], 0.2)};
  &:hover {
    border: 4px solid ${p => rgba(p.theme.colors.primary[100], 0.3)};
  }
`;

const Container = styled.div`
  ${"" /* background-color: ${props => props.theme.colors.primary[500]}; */}
  border: ${props => props.theme.colors.primary[500]} 2px solid;
  color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: no-wrap;

  @media (max-width: 1001px) {
    flex-direction: column;
    align-items: center;

    & > div:first-child {
      margin-bottom: 2rem;
    }

  }
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 1001px) {
    align-items: center;
    & > a {
      margin-bottom: 0.5rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  & > div > p {
    color: ${props => props.theme.colors.primary[500]};
    margin: 0;
    font-size: 14px;
  }
  & > div > b > a,
  & > div > b > a:active,
  & > div > b > a:hover,
  & > div > b > a:link,
  & > div > b > a:focus,
  & > div > b > a:visited {
    margin-left: 0.5rem;
    ${"" /* margin-right: 0.5rem; */}
    color: ${props => props.theme.colors.primary[500]};
    font-weight: bold;
    text-decoration: none !important;
  }
  & > small {
    color: ${props => props.theme.colors.primary[200]};
    font-size: 12px;
    font-weight: thin;
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
        <a href="https://twitter.com/d__raptis">
          <Avatar src="https://pbs.twimg.com/profile_images/1212447937789399046/c4-7A8B-_400x400.jpg" />
        </a>
        <div>
          <p>Made with {emoji} by </p>
          <b>
            <a href="https://twitter.com/d__raptis"> Jim Raptis </a>
          </b>
        </div>
        {/* <Avatar src={me} /> */}
        <small>
          © DesignValley {new Date().getFullYear()}. All rights reserved
        </small>
      </Credits>
    </Container>
  );
};

export default Footer;
