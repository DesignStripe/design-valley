import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Col } from "react-flexbox-grid";

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

const Cards = ({ title, tools, next, previous, isFeatured }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <CardContainer>
        {tools.map((tool, index) => (
          <Card
            key={tool._id}
            id={tool._id}
            image={tool.thumbnail}
            url={tool.url}
            title={tool.name}
            category={tool.category}
            description={tool.description}
            votes={tool.votes.length}
            isFeatured={
              tool.isFeatured ||
              tool.name === "CopyPalette" ||
              tool.name === "Khroma" ||
              tool.name === "Figma" ||
              tool.name === "Clean Mockups"
            }
          />
        ))}
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
