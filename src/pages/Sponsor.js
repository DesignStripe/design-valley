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

const About = ({}) => {
  const history = useHistory();

  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollable-div");
    console.log(scrollableDiv);
    scrollableDiv.scrollTop = 0;
  }, []);

  return (
    <Container>
      <PageTitle>Sponsor DesignValley</PageTitle>
      <Section
        // title="FAQ and Guidelines"
        paragraphs={[""]}
        after={
          <PlansWrapper>
            <PricingCard>
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

              <Button className="cta">Contact</Button>
            </PricingCard>

            <PricingCard isPrimary>
              <h1 className="title">Reccuring</h1>
              <div className="row">
                <h1 className="price">599$</h1>{" "}
                <p className="price-unit">per month</p>
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

              <Button className="cta">Contact</Button>
            </PricingCard>
          </PlansWrapper>
        }
      />

      {/* <Section
        title="FAQ and Guidelines"
        paragraphs={[
          "1. As a sponsor you can be assured that your link will not fight for position with any other sponsored links since there will be only one sponsored link per issue.",
          "2. Sponsored links should be relevant to Mobbin's design-focused audience and link to high-quality, well-designed content.",
          '3. If you use Google Analytics for tracking your website, visits to your sponsored link or job post can be tracked with the UTM tag "?ref=mobbin" and will show the number of incoming visitors from the sponsored link.'
        ]}
      /> */}
    </Container>
  );
};

export default About;

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
