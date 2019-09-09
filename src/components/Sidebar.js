import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Sidebar } from "semantic-ui-react";

const StyledSidebar = styled(Sidebar)`
  height: calc(100% - 2rem);
  min-width: 200px;
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
  & > *:hover {
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
  }
  & > a:hover {
    color: ${p => p.theme.colors.primary};
  }
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
    {items.map(item => (
      <Menu.Item as={Link} to={`/category/${item.id}`}>
        {item.name}
      </Menu.Item>
    ))}
  </StyledSidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default VerticalSidebar;
