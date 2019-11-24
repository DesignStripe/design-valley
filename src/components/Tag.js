import styled from "styled-components";
import { rgba } from "polished";

const Tag = styled.span`
  border: none;
  vertical-align: baseline;
  background: ${props => rgba(props.color, 0.1)} none;
  color: ${props => rgba(props.color, 1)};
  background: ${props => props.theme.colors.primary[500]}11 none;
  color: ${props => props.theme.colors.primary[500]};
  margin: 0 0.25em 0 0;
  padding: 4px;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
`;

export default Tag;
