import styled from "styled-components"

export const Wrapper = styled.div`
display:grid;
grid-template-columns: 1fr;

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;