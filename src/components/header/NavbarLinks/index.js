import React from 'react';
import {
    StyledLink,
    StyledList, 
    StyledListItem,
    StyledListLink 
} from './styles';
import { navLinks } from '@config'; 

const NavLinks = () => (
    <StyledLink>
        <StyledList>
            {navLinks
                && navLinks.map(({name, url}, index) => (
                    <StyledListItem
                        key={index}
                    >
                        <StyledListLink to={url}>{name}</StyledListLink>
                    </StyledListItem>
                ))
            }
        </StyledList>
    </StyledLink>
)

export default NavLinks