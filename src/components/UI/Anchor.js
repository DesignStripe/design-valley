import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const StyledA = styled.a`
font-weight: 500;
color: ${props => props.theme.colors.primary[900]};
text-decoration: none;

  background-image: linear-gradient(120deg, 
    ${props => rgba(props.theme.colors.primary[100], 0.5)}, 
    ${props => rgba(props.theme.colors.primary[100], 0.5)} 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.5em;
  background-position: 0 100%;
  transition: background-size 0.25s ease-in;
  transition: color 0.25s 0.1 ease-in;
}

&:hover {
  background-image: linear-gradient(120deg, 
    ${props => rgba(props.theme.colors.primary[100], 1)}, 
    ${props => rgba(props.theme.colors.primary[100], 1)} 100%);
  background-size: 100% 88% !important;
}

&:focus,
&:hover,
&:visited,
&:link,
&:active {
  text-decoration: none;
}
`;

const Anchor = ({ href, children }) => (
  <StyledA href={href} rel="noreferrer noopener" target="_blank">
    {children}
  </StyledA>
);

export default Anchor;
