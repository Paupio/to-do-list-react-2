import styled from "styled-components";

export default styled.input`
  border: 2px solid #a1a1a1;
  border-radius: 0%;
  margin-right: 20px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;