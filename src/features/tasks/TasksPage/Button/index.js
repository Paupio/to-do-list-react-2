import styled from "styled-components";

export default styled.button`
    background: transparent;
    border: none;
    color: teal;
    transition: color 0.5s;
    cursor: pointer;
    margin: 0 0 0 20px;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:disabled {
        color: #ccc;
    }
`;