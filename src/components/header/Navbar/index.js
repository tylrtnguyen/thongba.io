import React, { useState, useEffect } from 'react';
import 
{ 
    StyledContainer,
    StyledNav,
    StyledLogo
} from './styles';
import LogoLight from '@images/logoLight';
import { throttle } from '@utils'
import NavLinks from '../NavbarLinks/index';
import { Link } from 'gatsby';

const DELTA = 5;

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('none');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        // Use throttling to limit the number of times that function can be called.
        // and thus improve the page performance
        setTimeout(() => {
            window.addEventListener('scroll', () => throttle(handleScroll()));
            window.addEventListener('resize', () => throttle(handleResize()));
            window.addEventListener('keydown', e => throttle(handleKeydown(e)));
        }, 100)
        
        // Clean up
        return () => {
            window.removeEventListener('scroll', () => handleScroll());
            window.removeEventListener('resize', () => handleResize());
            window.removeEventListener('keydown', e => handleKeydown(e));
        }
    }, []) 

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = () => {
        const fromTop = window.scrollY;

        // Make sure they 
        if(Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
            return;
        }
    }

    const handleResize = () => {
        if(window.innerWidth > 768 && menuOpen) {
            toggleMenu();
        }
    }

    const handleKeydown = e => {
        if(!menuOpen) {
            return;
        }

        if (e.which === 27 || e.key === 'Escape') {
            toggleMenu();
        }
    }

    return (
        <StyledContainer scrollDirection={scrollDirection}>
            <StyledNav>
                <StyledLogo>
                    <Link to="/">
                        <LogoLight/>
                    </Link>
                </StyledLogo>
                <NavLinks />
            </StyledNav>
        </StyledContainer>
    )
}


export default NavBar;



