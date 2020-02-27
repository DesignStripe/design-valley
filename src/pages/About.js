import React, { useEffect } from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";

import Anchor from "../components/UI/Anchor";
import Avatar from "../components/Avatar";
import FaqSection from "../components/UI/FaqSection";
import { PageTitle } from "../components/UI/Typography";
import { ProductHunt } from "../components/UI/Testinmonials";

const Container = styled(Col)`
  margin-bottom: 2rem;
`;

const About = ({}) => {
  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollable-div");
    console.log(scrollableDiv);
    scrollableDiv.scrollTop = 0;
  }, []);

  return (
    <Container>
      <PageTitle>About</PageTitle>
      <FaqSection
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
      <FaqSection
        title="What is DesignValley?"
        paragraphs={[
          <ProductHunt />,
          "DesignValley is a curated collection of remarkable design apps and resources. The whole project started as a Github README.md file that stored some useful design tools. Slowly, but steadily, this list was getting richer and richer. That's when I decided to create a community-based and interactive application to showcase it and let people participate by voting and sharing these goodies."
        ]}
      />
      <FaqSection
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
      <FaqSection
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
      <FaqSection
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
