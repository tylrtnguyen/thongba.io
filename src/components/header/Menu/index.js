import React from 'react';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import {
    StyledContainer,
    Sidebar,
    Nav,
    NavList,
    NavListItem,
    NavLink
} from './styles';

const Menu = ({menuOpen, toggleMenu}) => {
    const handleMenuClick = e => {
        const target = e.target;
        const isLink = target.hasAttribute('href');
        const isNotMenu = target.classList && target.classList[0].includes('StyledContainer');

        if(isLink || isNotMenu) {
            toggleMenu();
        }
    };

    return (
        <StyledContainer
            menuOpen={menuOpen}
            onClick={handleMenuClick}
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 1 : -1}
        >
            <Sidebar>
                <Nav>
                    <NavList>
                        {
                            navLinks &&
                            navLinks.map(({url, name}, index) => (
                                <NavListItem key={index}>
                                    <NavLink to={url}>{name}</NavLink>
                                </NavListItem>
                            ))
                        }
                    </NavList>
                </Nav>
            </Sidebar>
        </StyledContainer>
    )
}

Menu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
}

export default Menu;