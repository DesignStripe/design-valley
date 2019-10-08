import { hot } from "react-hot-loader/root";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import CategoryContainer from "./containers/CategoryContainer";
import PopularContainer from "./containers/PopularContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import FeaturedContainer from "./containers/FeaturedContainer";

import Nav from "./components/Nav";
import Card from "./components/Card";
import Body from "./components/Body";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

import menuItems from "./data/menuItems";
import theme from "./utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Nav />
        <Body>
          <Sidebar items={menuItems} />
          <MainSection>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/category/:id" exact component={CategoryContainer} />
            <Route path="/card/:id" component={Card} />
            <Route path="/popular" exact component={PopularContainer} />
            <Route path="/featured" exact component={FeaturedContainer} />
            <Route path="/favorites" exact component={FavoritesContainer} />
          </MainSection>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
