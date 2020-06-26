import React from 'react';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import {
    StyledContainer,
    Sidebar,
    Nav,
    NavList,
    NavListItem,
    NavLink,
    StyledSocialContainer
} from './styles';
import { HorizontalSocial } from '@components/common';

const Menu = ({menuOpen, toggleMenu}) => {
    const handleMenuClick = e => {
        const target = e.target;
        const isLink = target.hasAttribute('href');
        const isSocialIcon = target.hasAttribute('d') || target.hasAttribute('xmlns');
        const isNotMenu = target.classList[0] && target.classList[0].includes('StyledContainer');
        
        if(isLink || isSocialIcon || isNotMenu) {
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
                <StyledSocialContainer>
                    <HorizontalSocial />
                </StyledSocialContainer>
            </Sidebar>
        </StyledContainer>
    )
}

Menu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
}

export default Menu;