import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Menu, Sidebar } from "semantic-ui-react";
import { FiHeart, FiStar, FiTrendingUp, FiZap } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCurrentCategory } from "../redux/reducers/categoriesReducer";
import Logo from "./Logo";

const BetaBadge = styled.div`
  background-color: red;
  color: white;
  font-size: 12px;
  border-radius: 4px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.125rem 0.25rem;
  transform: translate(0%, -110%);
`;

const LogoWrapper = styled.div`
  ${"" /* background-color: ${p => p.theme.colors.primary[400]}; */}
  height: 32px;
  margin: 1rem auto 2rem auto !important;
  ${"" /* padding-left: 0 !important; */}
  ${"" /* padding: .5rem !important; */}
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration: none;
  color: ${p => p.theme.colors.neutrals[100]};
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  align-text: center;

  position: relative;
`;

const gradientMovement = keyframes`
  0% {
    background-position:0% 50%
  }
  50% {
    background-position:100% 50%
  }
  100% {
    background-position:0% 50%
  }
`;

const EmptyRect = styled.div`
  height: 1rem;
  width: ${props => props.widthPercent}%;
  background-color: ${p => p.theme.colors.primary[400]};
  border-radius: 4px;
  animation: ${gradientMovement} 3s ease-in-out infinite;
  background: linear-gradient(
    270deg,
    ${p => p.theme.colors.primary[400]},
    ${p => p.theme.colors.primary[300]}
  );
  background-size: 400% 400%;
`;

const StyledSidebar = styled(Sidebar)`
  height: calc(100% - 2rem);
  min-width: 250px;
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

  @media (max-width: 800px) {
    display: none;
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

function getRandomIntBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const VerticalSidebar = ({ history, categories, isLoading }) => {
  const dispatch = useDispatch();

  return (
    <StyledSidebar
      as={Menu}
      animation="slide-out"
      direction="left"
      icon="labeled"
      inverted
      vertical
      visible="true"
      width="wide"
    >
      <LogoWrapper onClick={() => history.push(`/`)}>
        <Logo width={180} />
        <BetaBadge>Beta</BetaBadge>

        {/* <b>Design Valley</b> */}
      </LogoWrapper>
      {isLoading ? (
        <>
          {Array.from(Array(10).keys()).map(index => (
            <Menu.Item>
              <EmptyRect widthPercent={getRandomIntBetween(30, 100)} />
            </Menu.Item>
          ))}
        </>
      ) : (
        <>
          {fixedItems.map(item => (
            <Menu.Item as={Link} to={`/${item.id}`} key={item.id}>
              {item.icon || item.emoji}
              {item.name}
            </Menu.Item>
          ))}
          <Divider />
          <ScrollableSection>
            {categories.map((item, index) => (
              <Menu.Item
                as={Link}
                to={`/category/${item._id}`}
                key={item._id}
                onClick={() => dispatch(setCurrentCategory(index))}
              >
                {/* {item.icon || item.emoji} */}
                {item.name}
              </Menu.Item>
            ))}
          </ScrollableSection>
        </>
      )}
    </StyledSidebar>
  );
};

export default withRouter(VerticalSidebar);
