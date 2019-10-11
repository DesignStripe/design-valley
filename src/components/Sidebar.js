import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Sidebar } from "semantic-ui-react";

const StyledSidebar = styled(Sidebar)`
  height: calc(100% - 2rem);
  min-width: 250px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  float: left;
  overflow-y: scroll;

  & > * {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  & > a:hover {
    background-color: #eee;
    border-radius: 8px;
    cursor: pointer;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
    color: #212121;
    display: flex;
    align-items: center;
  }
  & > a:hover {
    color: ${p => p.theme.colors.primary};
  }

  & > a > svg {
    margin-right: 0.5rem;
  }
`;

const Divider = styled.div`
  width: 50%;
  margin: 1rem auto 2rem auto;
  margin-bottom: 1rem;
  border-top: 1px solid #dfdfdf;
`;

const VerticalSidebar = ({ items }) => (
  <StyledSidebar
    as={Menu}
    animation="slide-out"
    direction="left"
    icon="labeled"
    inverted
    vertical
    visible={true}
    width="wide"
  >
    {items.map(item =>
      item.name === "devider" ? (
        <Divider />
      ) : (
        <Menu.Item
          as={Link}
          to={item.isHighlighted ? `/${item.id}` : `/category/${item.id}`}
        >
          {item.icon || item.emoji}
          {item.name}
        </Menu.Item>
      )
    )}
  </StyledSidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default VerticalSidebar;
