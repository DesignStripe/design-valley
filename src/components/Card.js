import styled from "styled-components";

const Card = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;

  width: 300px;
  box-sizing: border-box;

  flex: 0 1 24%;

  flex: 0 1 calc(25% - 1em);

  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

export default Card;
