import styled from "styled-components";

const MainSection = styled.div`
  width: calc(100vw - 200px);
  height: 100%;
  float: right;
  overflow-y: scroll;

  @media (max-width: 800px) {
    width: calc(100vw - 1rem);
  }
`;

export default MainSection;
