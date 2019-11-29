import styled from "styled-components";

const Body = styled.div`
  width: 100vw;
  height: calc(100vh);
  min-height: calc(100vh);
  max-height: calc(100vh);

  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
    display: block;
  }
`;

export default Body;
