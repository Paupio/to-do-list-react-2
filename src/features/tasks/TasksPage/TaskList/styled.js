import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    padding: 30px 10px;
    margin: auto;
    list-style: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 3px;
  }
`;

export const Item = styled.li`
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid #eee;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    transition: 0.5s;

    ${({ Done }) => Done && css`
        background-color: green;

        &:hover {
            background-color: rgb(55, 161, 23);
            cursor: pointer;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: red;

        &:hover {
            background-color: rgb(235, 26, 61);
            cursor: pointer;
        }
    `}

`;

export const TaskLink = styled(Link)`
  text-decoration: none;
  color: black;

`;