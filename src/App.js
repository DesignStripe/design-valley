import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";

import HomeContainer from "./containers/HomeContainer";
import CategoryContainer from "./containers/CategoryContainer";
import PopularContainer from "./containers/PopularContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import FeaturedContainer from "./containers/FeaturedContainer";
import ToolContainer from "./containers/ToolContainer";
import SidebarContainer from "./containers/SidebarContainer";

// import Nav from "./components/Nav";
import Body from "./components/Body";
import MainSection from "./components/MainSection";

import theme from "./utils/theme";
import { getFingerprint, getIp } from "./utils/fingerprint";
import PolicyLabel from "./components/PolicyMessage";
import FloatingHeader from "./components/FloatingHeader";
import Footer from "./components/Footer";
import {
  setFingerprint,
  setIp,
  setSocket
} from "./redux/reducers/userSessionReducer";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_HOST);
    dispatch(setSocket(socket));

    setTimeout(() => {
      getFingerprint().then(hash => dispatch(setFingerprint(hash)));
      getIp().then(hash => dispatch(setIp(hash)));
    }, 500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        {/* <FloatingHeader /> */}
        <PolicyLabel />
        {/* <Nav /> */}
        <Body>
          <SidebarContainer />
          <MainSection>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/category/:id" exact component={CategoryContainer} />
            <Route path="/tool/:id" component={ToolContainer} />
            <Route path="/popular" exact component={PopularContainer} />
            <Route path="/featured" exact component={FeaturedContainer} />
            <Route path="/favorites" exact component={FavoritesContainer} />
            <Footer />
          </MainSection>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
