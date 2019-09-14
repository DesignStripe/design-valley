import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageWrapper = styled.div`
  ${props =>
    props.fitContainer
      ? `
      width: 100%
      padding-bottom: ${props.ratioPercent}%;
    `
      : `
      width: ${props.size}px;
      height: ${props.size}px;
    `}
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ImageDiv = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  ${props =>
    props.isSharp &&
    `
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  `};
  ${props =>
    props.grayscale && "-webkit-filter: grayscale(100%); filter: gray;"}
`;

function getRatioPercent(ratio) {
  switch (ratio) {
    case "1:1":
      return 1;
    case "4:3":
      return 3 / 4;
    case "16:9":
      return 9 / 16;
    default:
      return 1;
  }
}

const Image = ({
  src,
  ratio,
  size,
  fitContainer,
  grayscale,
  original,
  isSharp
}) => {
  const ratioPercent = getRatioPercent(ratio) * 100;

  return (
    <ImageWrapper
      ratioPercent={ratioPercent}
      size={size}
      fitContainer={fitContainer}
    >
      <ImageDiv
        src={src}
        size={size}
        grayscale={grayscale}
        original={original}
        isSharp={isSharp}
      />
    </ImageWrapper>
  );
};
Image.propTypes = {
  size: PropTypes.number,
  fitContainer: PropTypes.bool,
  src: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf(["1:1", "4:3", "16:9"]),
  original: PropTypes.bool,
  grayscale: PropTypes.bool,
  isSharp: PropTypes.bool
};

Image.defaultProps = {
  size: 0,
  fitContainer: false,
  src: "",
  ratio: "1:1",
  original: false,
  grayscale: false,
  isSharp: false
};

export default Image;
