import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const StyledSidebar = styled(Sidebar)`
  background-color: #f5f5f5;
  margin: 1rem;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  box-sizing: border-box;

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
