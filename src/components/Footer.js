import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rgba } from "polished";

import CallToAction from "./CallToAction";
import Link from "./Link";
import Avatar from "./Avatar";

const TopRow = styled.div`
  width: 100%;
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

const PageLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;

  & > a {
    font-size: 0.8rem;
    margin: 0 1rem;
    color: ${props => props.theme.colors.primary[300]};
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    &:hover {
      color: ${props => props.theme.colors.primary[500]};
    }
  }
`;

const Container = styled.div`
  ${"" /* background-color: ${props => props.theme.colors.primary[500]}; */}
  border: ${props => props.theme.colors.primary[500]} 2px solid;
  color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1rem;
  
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
      <TopRow>
        <CallToAction />

        <Credits>
          <Avatar />
          <div>
            <p>Made with {emoji} by </p>
            <b>
              <a href="https://twitter.com/d__raptis"> Jim Raptis </a>
            </b>
            <p style={{marginLeft: 8}}>and</p>
            <b>
              <a href="https://designstripe.com"> designstripe </a>
            </b>
          </div>
          {/* <Avatar src={me} /> */}
          <small>
            © DesignValley {new Date().getFullYear()}. All rights reserved
          </small>
        </Credits>
      </TopRow>

      <PageLinks>
        {/* <a>About</a> */}
        <Link to="/about">About</Link>
        <a
          href="https://spectrum.chat/designvalley?tab=posts"
          target="_blank"
          rel="noreferrer noopener"
        >
          Join Community
        </a>
        <Link to="/sponsor">Sponsor</Link>
        {/* <a>Policy</a> */}
      </PageLinks>
    </Container>
  );
};

export default Footer;
