import React from 'react';
import {
    StyledLink,
    StyledList, 
    StyledListItem,
    StyledListLink 
} from './styles';
import { navLinks } from '@config'; 
import { theme } from '@templates';

const activeStyle = {
    color: `${theme.colors.hoverBlue}`
}


const NavLinks = () => (
    <StyledLink>
        <StyledList>
            {navLinks
                && navLinks.map(({name, url}, index) => (
                    <StyledListItem
                        key={index}
                    >
                        <StyledListLink to={url} activeStyle={activeStyle}>{name}</StyledListLink>
                    </StyledListItem>
                ))
            }
        </StyledList>
    </StyledLink>
)

export default NavLinks