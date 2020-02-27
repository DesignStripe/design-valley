import styled from "styled-components";

export const PageTitle = styled.h1`
  height: 32px;
  ${"" /* margin: 1rem 0 1.5rem 1rem; */}
  margin: 0;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary[900]};
`;
