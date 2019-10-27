import React from "react";
import styled from "styled-components";

const Image = styled.img`
  vertical-align: middle;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 50%;
  background-color: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Avatar = ({ onClick, src }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={src} alt="Avatar" />
    </Wrapper>
  );
};

export default Avatar;
