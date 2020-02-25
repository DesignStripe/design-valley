import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import { Col } from "react-flexbox-grid";
import LoadingCard from "../components/LoadingCard";
import { rgba } from "polished";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

const Container = styled(Col)`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  height: 32px;
  ${"" /* margin: 1rem 0 1.5rem 1rem; */}
  margin: 0;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary[900]};
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary[900]};
`;
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary[900]};
`;

const SectionContainer = styled.div``;

const Content = styled.div`
  margin-left: 0.5rem;
  & > * {
    margin-bottom: 1rem;
  }
  & > *:last-child {
    margin-bottom: 3rem;
  }
`;

const Section = ({ title, paragraphs, before, after }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      <Content>
        {before}
        {paragraphs.map(paragraph => (
          <Text>{paragraph}</Text>
        ))}
        {after}
      </Content>
    </SectionContainer>
  );
};

const Centered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
  font-weight: 500;
  color: ${props => props.theme.colors.primary[900]};
  text-decoration: none;

    background-image: linear-gradient(120deg, 
      ${props => rgba(props.theme.colors.primary[100], 0.5)}, 
      ${props => rgba(props.theme.colors.primary[100], 0.5)} 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.5em;
    background-position: 0 100%;
    transition: background-size 0.25s ease-in;
    transition: color 0.25s 0.1 ease-in;
  }

  &:hover {
    background-image: linear-gradient(120deg, 
      ${props => rgba(props.theme.colors.primary[100], 1)}, 
      ${props => rgba(props.theme.colors.primary[100], 1)} 100%);
    background-size: 100% 88% !important;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Anchor = ({ href, children }) => (
  <StyledA href={href} rel="noreferrer noopener" target="_blank">
    {children}
  </StyledA>
);

const About = ({}) => {
  const history = useHistory();

  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollable-div");
    console.log(scrollableDiv);
    scrollableDiv.scrollTop = 0;
  }, []);

  return (
    <Container>
      <PageTitle>About </PageTitle>
      <Section
        title="Who runs DesignValley?"
        paragraphs={[
          "Hey, Jim here. I'm the man behind DesignValley. My background is both in design and engineering and I strive to craft usable apps and user interfaces for humans.",
          <>
            I'm co-founder and Lead Product Designer of{" "}
            <Anchor href="https://www.visualeyes.design">VisualEyes</Anchor>,
            that aims to shape the future of design. Some of my most recent
            side-project are{" "}
            <Anchor href="https://www.copypalette.app">CopyPalette</Anchor>,{" "}
            <Anchor href="https://www.Wireframer.art">Wireframer</Anchor>, and{" "}
            <Anchor href="https://www.woddd.run">Woddd</Anchor>.
          </>
        ]}
        before={
          <Avatar
            size={64}
            style={{ marginBottom: "1rem", display: "inline-block" }}
          />
        }
      />
      <Section
        title="What is DesignValley?"
        paragraphs={[
          "DesignValley is a curated collection of remarkable design apps and resources. The whole project started as a Github README.md file that stored some useful design tools. Slowly, but steadily, this list was getting richer and richer. That's when I decided to create a community-based and interactive application to showcase it and let people participate by voting and sharing these goodies."
        ]}
      />
      <Section
        title="How can I suggest a resource?"
        paragraphs={[
          <>
            You're able to contribute to DesignValley by contacting me at{" "}
            <Anchor href="mailto:jim@designvalley.club">
              jim@designvalley.club
            </Anchor>{" "}
            or <Anchor href="https://twitter.com/d__raptis">DM me</Anchor> at
            Twitter.
          </>
        ]}
      />
      <Section
        title="How to become a sponsor?"
        paragraphs={[
          <>
            For companies wanting to advertise high quality, relevant products
            to designers, I have spots open either on the homepage or at the
            sides of each product page. Drop me an email to{" "}
            <Anchor href="mailto:jim@designvalley.club">
              jim@designvalley.club
            </Anchor>{" "}
            and learn more information.
          </>
          // "Payment can be made by bank transfer, Revolut, or PayPal."
        ]}
      />
      <Section
        title="Do you keep any data?"
        paragraphs={[
          "Your privacy is important to us.",
          <>
            All data such as favorites are stored locally on the browser. The
            only external services are{" "}
            <Anchor href="https://analytics.google.com/analytics/web/">
              Google Analytics
            </Anchor>{" "}
            and <Anchor href="https://www.hotjar.com/">Hotjar</Anchor> for usage
            analytics to help us offer a better user experience and identify
            possible bugs.
          </>,
          "Meanwhile, a random, unique, and anonymous string is used to verify identity and secure voting process objectivity. It's not anything related to your personal information."
        ]}
      />
    </Container>
  );
};

export default About;
