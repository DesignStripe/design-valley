import React from "react";
import styled from "styled-components";

const Image = styled.img`
  vertical-align: middle;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  width: 34px;
  height: 34px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #f1f1f1;
  &:hover {
    background-color: #ddd;
  }
`;

const Avatar = ({ src }) => {
  return (
    <Wrapper>
      <Image src={src} alt="Avatar" class="avatar" />
    </Wrapper>
  );
};

export default Avatar;
