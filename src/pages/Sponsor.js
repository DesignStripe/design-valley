import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Col } from "react-flexbox-grid";
import { rgba } from "polished";

import Button from "../components/Button";
import FaqSection from "../components/UI/FaqSection";
import toolPage from "../assets/Sponsorship - Tool page.jpg";
import homePage from "../assets/Sponsorship - Feed.jpg";

const Container = styled(Col)`
  margin-bottom: 2rem;
`;

const Image = styled.img`
  margin-bottom: 1.5rem;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }

  border-radius: 10px;
  box-shadow: 0px 28px 40px -32px ${p => rgba(p.theme.colors.primary[500], 1)};
`;

const PageTitle = styled.h1`
  height: 32px;
  ${"" /* margin: 1rem 0 1.5rem 1rem; */}
  margin: 0;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary[900]};
`;

const PlansWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div {
    margin-right: 1rem;
    margin-bottom: 0;
  }
  & > div:last-child {
    margin-right: 0;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      margin-bottom: 1rem;
      margin-right: 0;
    }
    & > div:last-child {
      margin-bottom: 0;
    }
  }
`;

const PricingCard = styled.div`
  max-width: 300px;

  @media (max-width: 500px) {
    max-width: 100%;
  }

  padding: 32px;
  border-radius: 10px;
  background: ${p => p.theme.colors.primary[500]};
  background: linear-gradient(
    90deg,
    ${p => p.theme.colors.primary[500]} 0%,
    ${p => p.theme.colors.primary[400]} 100%
  );
  ${p =>
    p.isPrimary
      ? `background: linear-gradient(
    90deg,
    ${p.theme.colors.primary[500]} 0%,
    ${p.theme.colors.primary[400]} 100%
  );`
      : `background: transparent; border: solid 1px ${p.theme.colors.primary[500]}`}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-shadow: 0px 28px 40px -32px ${p => rgba(p.theme.colors.primary[500], 1)};

  .title {
    font-size: 1.1875rem;
    font-weight: 500;
    color: ${p => (p.isPrimary ? "white" : p.theme.colors.primary[500])};
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .price {
    margin-right: 0.3125rem;
    font-size: 2.75rem;
    font-weight: 600;
    color: ${p => (p.isPrimary ? "white" : p.theme.colors.primary[500])};
  }

  .price-unit {
    margin-left: 1rem;
    font-size: 0.9375rem;
    font-weight: 400;
    color: ${p => (p.isPrimary ? "white" : p.theme.colors.primary[500])};
  }

  .cta {
    width: 100%;
    background: ${p => (p.isPrimary ? "white" : p.theme.colors.primary[500])};
    color: ${p => (p.isPrimary ? p.theme.colors.primary[500] : "white")};
    padding: 1rem 1.5rem;
  }

  & > ul > li {
    font-size: 0.9375rem;
    font-weight: 500;
    color: ${p => (p.isPrimary ? "white" : p.theme.colors.primary[500])};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5rem;

    & > svg {
      margin-right: 0.5rem;
      & > path {
        stroke: ${p => (p.isPrimary ? "white" : p.theme.colors.primary[500])};
      }
    }
  }
  & > ul {
    padding-inline-start: 0;

    list-style: none;
  }
`;

const Sponsor = ({}) => {
  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollable-div");
    console.log(scrollableDiv);
    scrollableDiv.scrollTop = 0;
  }, []);

  return (
    <Container>
      <PageTitle>Sponsorship</PageTitle>
      <FaqSection
        // title="FAQ and Guidelines"
        paragraphs={[""]}
        after={
          <PlansWrapper>
            {/* <PricingCard>
              <h1 className="title">Sponsored Link</h1>
              <div className="row">
                <h1 className="price">999$</h1>
                <p className="price-unit"> total</p>
              </div>
              <ul>
                <li>
                  <CheckIcon /> Placed in Home page
                </li>
                <li>
                  <CheckIcon /> Placed in Tool View
                </li>
                <li>
                  <CheckIcon /> Featured in Weekly Newsletter
                </li>
              </ul>

              <Button
                className="cta"
                onClick={() =>
                  window.open("https://forms.gle/2tAThMESBzk34BqD7", "_blank")
                }
              >
                Become a Sponsor
              </Button>
            </PricingCard> */}

            <PricingCard isPrimary>
              <h1 className="title">Sponsored Link</h1>
              <div className="row">
                <h1 className="price">799$</h1>{" "}
                <p className="price-unit">for one month</p>
              </div>
              <ul>
                <li>
                  <CheckIcon /> Placed in Home page
                </li>
                <li>
                  <CheckIcon /> Placed in Tool View
                </li>
                <li>
                  <CheckIcon /> Featured in Weekly Newsletter
                </li>
              </ul>

              <Button
                className="cta"
                onClick={() =>
                  window.open("https://forms.gle/2tAThMESBzk34BqD7", "_blank")
                }
              >
                Become a Sponsor
              </Button>
            </PricingCard>
          </PlansWrapper>
        }
      />

      <FaqSection
        title="FAQ and Guidelines"
        paragraphs={[
          "1. As a sponsor you can be assured that your link will not fight for position with any other sponsored links since there will be only one sponsored link per issue.",
          "2. Sponsored links should be relevant to DesignValley's design-focused audience and link to high-quality, well-designed content.",
          '3. If you use Analytics for tracking your website, visits to your sponsored link or job post can be tracked with the UTM tag "?ref=designvalley" and will show the number of incoming visitors from the sponsored link.'
        ]}
      />

      <FaqSection
        title="Sponsor Spots"
        paragraphs={[<Image src={homePage} />, <Image src={toolPage} />]}
      />
    </Container>
  );
};

export default Sponsor;

const CheckIcon = ({ color = "#fff" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.3333 6.95825L9.24999 17.0416L4.66666 12.4583"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
