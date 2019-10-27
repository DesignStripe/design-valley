import React, { useState, useEffect } from "react";
import styled from "styled-components";
import me from "../assets/me.jpeg";
import Avatar from "./Avatar";
import Button from "./Button";

const Container = styled.div`
  background-color: #f4f4f4;
  color: #08295e;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const SubscibeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h3 {
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  > p {
    margin: 0;
    margin-bottom: 1rem;
    color: #666;
  }
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  & > p {
    color: #212121;
    margin: 0;
    margin-bottom: 1rem;
  }
  & > p > b > a,
  & > p > b > a:active,
  & > p > b > a:hover,
  & > p > b > a:link,
  & > p > b > a:focus,
  & > p > b > a:visited {
    color: #08295e;
    font-weight: bold;
    text-decoration: none !important;
  }
  & > small {
    color: #aaa;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 400px;
`;

const Input = styled.input`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  font-family: inherit;
  line-height: 1.5;
  color: #3d3d3d;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none !important;
  background-color: #fff;
  border: 1px solid #fff;
  transition: border-color 0.35s, color 0.35s, background-color 0.35s;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 12px 21px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px solid #aaa;
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
      <SubscibeDiv>
        <h3>Learn the best design tools first</h3>
        <p>Subscibe to our weekly newsletter</p>
        <Form>
          <Input />
          <Button
            variant="primary"
            style={{
              right: "8px",
              top: "8px",
              padding: "11px 25px",
              fontSize: "12px",
              margin: 0,
              height: "auto",
              position: "absolute",
              backgroundColor: "#03132B",
              color: "#fff"
            }}
          >
            Subscribe
          </Button>
        </Form>
      </SubscibeDiv>

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