import styled from "styled-components";

export default styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;