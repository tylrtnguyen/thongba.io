import React from 'react';
import 
{ 
    StyledContainer,
    StyledNav,
    StyledBrand
} from './styles';
import NavLinks from '../NavbarLinks/index';
import { Link } from 'gatsby'

const NavBar = () => (
    <StyledContainer>
        <StyledNav>
            <StyledBrand><Link to="/">ThongBa</Link></StyledBrand>
            <NavLinks />
        </StyledNav>
    </StyledContainer>
)

export default NavBar;



