import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import ReactTooltip from "react-tooltip";

import HomeContainer from "./containers/HomeContainer";
import CategoryContainer from "./containers/CategoryContainer";
import PopularContainer from "./containers/PopularContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import FeaturedContainer from "./containers/FeaturedContainer";
import ToolContainer from "./containers/ToolContainer";
import NavContainer from "./containers/NavContainer";
import LatestContainer from "./containers/LatestContainer";

// import Nav from "./components/Nav";
import About from "./pages/About";
import Sponsor from "./pages/Sponsor";
import DomainOwnership from "./pages/DomainOwnership";

import Body from "./components/Body";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

import theme from "./utils/theme";
import { getFingerprint, getIp, getUserInfo } from "./utils/fingerprint";
import { history } from "./utils/history";
import "./utils/analytics";

import {
  setFingerprint,
  setIp,
  setUserInfo,
  setSocket
} from "./redux/reducers/userSessionReducer";
import { addVote } from "./redux/reducers/votesReducer";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    background-color: ${props => props.theme.colors.primary[500]}11;
    margin: 0;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_HOST);
    dispatch(setSocket(socket));
    socket.on("updateVotes", newVote => {
      dispatch(addVote(newVote));
    });

    setTimeout(() => {
      getUserInfo().then(object => dispatch(setUserInfo(object)));
      getFingerprint().then(hash => dispatch(setFingerprint(hash)));
      getIp().then(hash => dispatch(setIp(hash)));
    }, 500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        {/* <FloatingHeader /> */}
        {/* <PolicyLabel /> TODO: add this again*/}
        {/* <Nav /> */}
        <Body>
          <ReactTooltip id="global" />
          <NavContainer />
          {/* <PHBanner /> */}
          <MainSection id="scrollable-div">
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/category/:id" exact component={CategoryContainer} />
              <Route path="/tool/:id" exact component={ToolContainer} />
              <Route path="/popular" exact component={PopularContainer} />
              <Route path="/latest" exact component={LatestContainer} />
              <Route path="/featured" exact component={FeaturedContainer} />
              <Route path="/favorites" exact component={FavoritesContainer} />
              <Route path="/about" exact component={About} />
              <Route path="/sponsor" exact component={Sponsor} />
              <Route
                path="/domain-ownership-validation"
                exact
                component={DomainOwnership}
              />

              <Route component={HomeContainer} />
            </Switch>
            <Footer />
          </MainSection>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
