import React from "react";
import styled from "styled-components";
import { FiTwitter } from "react-icons/fi";

import Button from "./Button";
import LogoIcon from "./LogoIcon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  background: ${p => p.theme.colors.primary[100]}55;
  padding: 2rem;
  color: ${p => p.theme.colors.primary[500]};
  border-radius: 10px;
  margin-bottom: 2rem;

  box-sizing: border-box;
`;

const Info = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${p => p.theme.colors.primary[900]};

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 100;
    margin: 0;
  }

  div {
    margin-top: 2rem;
  }
`;

const HeaderBanner = ({}) => {
  return (
    <Container>
      <LogoIcon size={100} />
      <Info>
        <h1>Welcome on board !</h1>
        <h2>
          DesignValley is the ultimate design tool depository.{" "}
          <b>Find, vote, save</b> and <b>share</b> your favorite design tools
          now!
        </h2>

        <div>
          <Button
            variant="primary"
            style={{
              right: "8px",
              top: "8px",
              padding: "11px",
              fontSize: "12px",
              margin: 0,
              height: "auto",
              color: "#fff",
              display: "flex",
              alignItems: "center"
            }}
            onClick={() =>
              window.open(
                "https://twitter.com/intent/tweet?text=" +
                  "🥇%20DesignValley%20is%20the%20ultimate%20design%20tools%20depository%20curated%20by%20@d__raptis.%0A%0AFind,%20Vote,%20Save%20and%20Share%20the%20best%20design%20tools%20and%20resources%20now%20https://designvalley.club",
                "_blank"
              )
            }
          >
            <FiTwitter style={{ marginRight: ".5rem" }} /> Share with your
            friends
          </Button>
        </div>
      </Info>
    </Container>
  );
};

export default HeaderBanner;
