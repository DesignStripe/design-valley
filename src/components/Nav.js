import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import categories from "../data/categories.json";

const Container = styled.header`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    height: 32px;
    margin: auto 1rem;
    border-radius: 8px;
    padding: 1rem;
    min-width: 250px;
    box-sizing: border-box;
    text-decoration: none;
    color: ${props => props.theme.colors.primary[500]};
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .title {
    margin: 0;
    margin-left: 1rem;
    text-transform: capitalize;
  }
`;

const findTitleFromPathname = () => {
  const pathname = window.location.pathname;
  if (pathname === "/") return "Home";

  const isCategory = pathname.indexOf("/category/") !== -1;
  const isTool = pathname.indexOf("/tool/") !== -1;
  if (isCategory) {
    const categoryId = pathname.replace("/category/", "");
    const title = categories.find(category => category.id === categoryId).name;
    return title;
  } else if (isTool) {
    const title = "";
    return title;
  } else {
    const title = pathname.replace("/", "");
    return title;
  }
};

const Nav = ({ history }) => {
  const [title, setTitle] = useState("");

  history.listen((location, action) => {
    setTitle(findTitleFromPathname());
  });

  useEffect(() => setTitle(findTitleFromPathname()), []);

  return (
    <Container>
      <Link className="logo" to="/">
        <b>Design Valley</b>
      </Link>
      <h2 className="title">{title}</h2>
    </Container>
  );
};

export default withRouter(Nav);
