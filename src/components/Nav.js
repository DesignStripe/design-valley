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
    background-color: #f5f5f5;
    margin: auto 1rem;
    border-radius: 8px;
    padding: 1rem;
    min-width: 200px;
    box-sizing: border-box;
  }
  .title {
    margin: 0;
    margin-left: 0.5rem;
    text-transform: capitalize;
  }
`;

const findTitleFromPathname = () => {
  const pathname = window.location.pathname;
  if (pathname === "/") return "Home";

  const isCategory = pathname.indexOf("/category/") !== -1;
  if (isCategory) {
    const categoryId = pathname.replace("/category/", "");
    const title = categories.find(category => category.id === categoryId).name;
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
        Design Valley
      </Link>
      <h2 className="title">{title}</h2>
    </Container>
  );
};

export default withRouter(Nav);
