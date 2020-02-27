import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";
import { FiHeart, FiStar, FiGlobe, FiZap, FiMenu, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCurrentCategory } from "../redux/reducers/categoriesReducer";
import { bubble as Menu } from "react-burger-menu";
import theme from "../utils/theme";
import Logo from "./Logo";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0 2rem 1rem;
`;

// const Logo = styled.div`
//   height: 32px;
//   margin: 2rem auto !important;
//   padding-left: 0 !important;
//   border-radius: 8px;
//   box-sizing: border-box;
//   text-decoration: none;
//   color: ${p => p.theme.colors.primary[500]};
//   font-size: 2rem;
//   font-weight: bold;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   width: 100vw;
// `;

const StyledMenu = styled(Menu)`
  height: calc(100% - 2rem);
  min-width: 230px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.primary[500]};

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
    background-color: #08295f;
    background-color: ${p => p.theme.colors.primary[400]};

    border-radius: 8px;
    cursor: pointer;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.neutrals[100]};
    color: ${p => p.theme.colors.primary[100]};
    display: flex;
    align-items: center;
  }
  & > a:hover {
    ${"" /* color: ${p => p.theme.colors.primary[500]}; */}
  }

  & > a > svg {
    margin-right: 0.5rem;
  }
`;

const Divider = styled.div`
  width: 50%;
  margin: 2rem auto;
  border-top: 1px solid ${p => p.theme.colors.neutrals[300]};
  padding: 0 !important;
`;

const FixedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  & > * {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > a:hover {
    background-color: ${p => p.theme.colors.neutrals[100]};
    background-color: #08295f;
    background-color: ${p => p.theme.colors.primary[400]};

    border-radius: 8px;
    cursor: pointer;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.neutrals[100]};
    color: ${p => p.theme.colors.primary[100]};
    display: flex;
    align-items: center;
  }
  & > a:hover {
    ${"" /* color: ${p => p.theme.colors.primary[500]}; */}
  }

  & > a > svg {
    margin-right: 0.5rem;
  }
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
    background-color: #08295f;
    background-color: ${p => p.theme.colors.primary[400]};
    border-radius: 8px;
    cursor: pointer;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.neutrals[100]};
    color: ${p => p.theme.colors.primary[100]};

    display: flex;
    align-items: center;
  }
  & > a:hover {
    ${"" /* color: ${p => p.theme.colors.primary[500]}; */}
  }

  & > a > svg {
    margin-right: 0.5rem;
  }
`;

const fixedItems = [
  {
    icon: <FiGlobe fill="none" color="#fff" />,
    name: "Latest",
    id: "latest",
    isHighlighted: true
  },
  {
    icon: <FiHeart fill="none" color="#fff" />,
    name: "Favorites",
    id: "favorites",
    isHighlighted: true
  },
  {
    icon: <FiStar fill="none" color="#fff" />,
    name: "Featured",
    id: "featured",
    isHighlighted: true
  },
  {
    icon: <FiZap color="#fff" />,
    name: "Popular",
    id: "popular",
    isHighlighted: true
  }
];

const HamburgerMenu = ({ history, categories, isLoading }) => {
  const dispatch = useDispatch();

  return (
    <>
      <LogoWrapper>
        <Logo
          width={200}
          theme={{
            hiddenColor: "#F4F1FE",
            primaryColor: theme.colors.primary[500]
          }}
        />
      </LogoWrapper>
      <Menu
        styles={styles}
        right
        customBurgerIcon={
          <FiMenu size={32} color={theme.colors.neutrals[100]} />
        }
        customCrossIcon={<FiX size={32} color={theme.colors.neutrals[100]} />}
      >
        <FixedContainer>
          {fixedItems.map(item => (
            <Link to={`/${item.id}`} key={item.id}>
              {item.icon || item.emoji}
              {item.name}
            </Link>
          ))}
        </FixedContainer>
        <Divider />
        <ScrollableSection>
          {isLoading ? (
            <>FethcingCategories...</>
          ) : (
            categories.map((item, index) => (
              <Link
                to={`/category/${item._id}`}
                key={item._id}
                onClick={() => dispatch(setCurrentCategory(index))}
              >
                {item.name}
              </Link>
            ))
          )}
        </ScrollableSection>
      </Menu>
    </>
  );
};

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "36px",
    right: "1rem",
    top: "1rem",
    background: theme.colors.primary[500],
    borderRadius: "50%",
    padding: "0.75rem",
    cursor: "pointer",
    boxShadow: `0 16px 16px 0 ${theme.colors.primary[500]}55`
  },
  bmCrossButton: {
    top: "36px",
    right: "16px",
    height: "32px",
    width: "32px"
  },
  bmCross: {
    background: "transparent"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0
  },
  bmMenu: {
    background: theme.colors.primary[500],
    padding: "3em 1.5em",
    fontSize: "1.15em",
    border: "none",
    overflowY: "hidden",
    width: "100%"
  },
  bmMorphShape: {
    fill: theme.colors.primary[500]
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: 0
  }
};

export default HamburgerMenu;
