import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation="slide-out"
    direction="left"
    icon="labeled"
    inverted
    vertical
    visible={true}
    width="wide"
    style={{
      backgroundColor: "#f5f5f5",
      margin: "1rem",
      borderRadius: "8px",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      minWidth: "200px",
      boxSizing: "border-box"
    }}
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default VerticalSidebar;
