import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const CircleImage = styled.img`
  width: ${props => props.size / 16}rem;
  height: ${props => props.size / 16}rem;
  border-radius: 50%;
  border: 4px solid ${p => rgba(p.theme.colors.primary[100], 0.2)};
  &:hover {
    border: 4px solid ${p => rgba(p.theme.colors.primary[100], 0.3)};
  }
`;

const Avatar = ({ size = 32, style }) => {
  return (
    <a
      href="https://twitter.com/d__raptis"
      rel="noreferrer noopener"
      target="_blank"
      style={{ ...style }}
    >
      <CircleImage
        size={size}
        src="https://pbs.twimg.com/profile_images/1250316314498879498/-hr_7irm_400x400.jpg"
      />
    </a>
  );
};

export default Avatar;
