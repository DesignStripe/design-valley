import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Menu, Sidebar } from "semantic-ui-react";

const Logo = styled.div`
  height: 32px;
  margin: 1rem auto 2rem auto !important;
  padding-left: 0 !important;
  border-radius: 8px;
  box-sizing: border-box;
  ${"" /* min-width: 250px; */}
  box-sizing: border-box;
  text-decoration: none;
  color: ${props => props.theme.colors.neutrals[100]};
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  align-text: center;
`;

const StyledSidebar = styled(Sidebar)`
  height: calc(100% - 2rem);
  min-width: 250px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.neutrals[200]};
  background-color: #03132b;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  float: left;

  & > * {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > a:hover {
    background-color: ${p => p.theme.colors.neutrals[100]};
    border-radius: 8px;
    cursor: pointer;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.neutrals[100]};
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
  border-top: 1px solid ${p => p.theme.colors.neutrals[300]};
  padding: 0 !important;
`;

const ScrollableSection = styled.div`
  overflow-y: scroll;
  width: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & > * {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > a:hover {
    background-color: ${p => p.theme.colors.neutrals[100]};
    border-radius: 8px;
    cursor: pointer;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.neutrals[100]};
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

const VerticalSidebar = ({ history, fixedItems, menuCategories }) => (
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
    <Logo onClick={() => history.push(`/`)}>
      <b>Design Valley</b>
    </Logo>
    {fixedItems.map(item => (
      <Menu.Item
        as={Link}
        to={item.isHighlighted ? `/${item.id}` : `/category/${item.id}`}
      >
        {item.icon || item.emoji}
        {item.name}
      </Menu.Item>
    ))}
    <Divider />
    <ScrollableSection>
      {menuCategories.map(item =>
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
    </ScrollableSection>
  </StyledSidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default withRouter(VerticalSidebar);
