import styled from "styled-components";

const Body = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  min-height: calc(100vh - 64px);
  max-height: calc(100vh - 64px);
  background-color: lightblue;

  display: flex;
  flex-direction: row;
  ${"" /* position: fixed; */}
`;

export default Body;
