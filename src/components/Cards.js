import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import { Col } from "react-flexbox-grid";
import LoadingCard from "./LoadingCard";
import { rgba } from "polished";
import Button from "./Button";

const Container = styled(Col)`
  margin-bottom: 2rem;
`;

const CardContainer = styled.div``;

const Title = styled.h2`
  height: 32px;
  ${"" /* margin: 1rem 0 1.5rem 1rem; */}
  margin: 0;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary[900]};
`;

const EmptyContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
`;

const EmptyTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${p => p.theme.colors.primary[900]};
  margin: 0;
  margin-bottom: 0.75rem;
`;

const EmptyMessage = styled.p`
  font-weight: normal;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  color: ${p => p.theme.colors.primary[800]};
`;

const EmptyCard = ({ onButtonClick }) => {
  return (
    <EmptyContainer>
      <EmptyTitle>Oops!</EmptyTitle>
      <EmptyMessage>There are no design tools in this list yet.</EmptyMessage>
      <Button
        variant="primary"
        style={{
          right: "8px",
          top: "8px",
          padding: "11px 25px",
          fontSize: "12px",
          margin: 0,
          height: "auto",
          color: "#fff"
        }}
        onClick={onButtonClick}
      >
        Discover Tools
      </Button>
    </EmptyContainer>
  );
};

const Cards = ({ title, tools, next, previous, isFeatured, isReady }) => {
  const history = useHistory();

  function gotToPopular() {
    history.push("/popular");
  }

  const isToolsEmpty = !tools || tools.length === 0;

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <CardContainer>
        {!isReady ? (
          <LoadingCard />
        ) : isToolsEmpty ? (
          <EmptyCard onButtonClick={gotToPopular} />
        ) : (
          <>
            {tools.map((tool, index) => (
              <Card
                key={tool._id}
                id={tool._id}
                image={tool.thumbnail}
                url={tool.url}
                title={tool.name}
                category={tool.category}
                description={tool.description}
                votes={tool.votes ? tool.votes.length : 0}
                isFeatured={
                  tool.isFeatured ||
                  tool.name === "CopyPalette" ||
                  tool.name === "Khroma" ||
                  tool.name === "Figma" ||
                  tool.name === "Clean Mockups"
                }
              />
            ))}
          </>
        )}
      </CardContainer>
      {next && previous && (
        <div>
          <Link to={previous}>Previous</Link>
          <Link to={next}>Next</Link>
        </div>
      )}
    </Container>
  );
};

export default Cards;
