import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => {
    return (
        <NavContainer>
            <Brand to="/">Pet Foster</Brand>
            <NavLinks>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/pets">Pets</StyledNavLink>
                <StyledNavLink to="/contact">Contact Us</StyledNavLink>
            </NavLinks>
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: #333;
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const Brand = styled(NavLink)`
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #f5c518;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 24px;
`;

const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #444; /* Deep background color for the active tab */
    }

    &:hover {
        background-color: #555; /* Lighter color for hover effect */
    }
`;
