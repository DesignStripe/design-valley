import { hot } from "react-hot-loader/root";
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import CategoryContainer from "./containers/CategoryContainer";

import Nav from "./components/Nav";
import Card from "./components/Card";
import Body from "./components/Body";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

import menuItems from "./data/menuItems";
import theme from "./utils/theme";

const findTitleFromPathname = () => {
  const pathname = window.location.pathname;
  if (pathname === "/") return "Home";

  const title = pathname.replace("/category/", "").replace("-", " ");
  return title;
};

function App() {
  const title = findTitleFromPathname();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav title={title} />
        <Body>
          <Sidebar items={menuItems} />
          <MainSection>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/category/:id" exact component={CategoryContainer} />
            <Route path="/card/:id" component={Card} />
          </MainSection>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
