import styled from "styled-components";

const MainSection = styled.div`
  width: calc(100vw - 200px);
  height: calc(100vh; - 2rem);
  float: right;
  overflow-y: scroll;
  margin: 1rem;

  @media (max-width: 800px) {
    width: calc(100vw - 2rem);
  }
`;

export default MainSection;
