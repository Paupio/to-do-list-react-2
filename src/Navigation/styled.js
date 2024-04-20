import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const List = styled.ul`
    background: ${({ theme }) => theme.color.teal};
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;

    &.active {
        font-weight: bold;
    }
`;