import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Card from "./components/Card";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${"" /* background-color: gray; */}

  display: flex;
  flex-direction: row;
  position: fixed;
`;

function App() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Route path="/" exact component={Cards} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/card/:id" component={Card} />
      </Container>
    </Router>
  );
}

export default App;
