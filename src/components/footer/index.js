import React from 'react';
import LogoLight from '@images/logoLight';
import { Link } from 'gatsby';
import {
    StyledContainer,
    StyledLogo,
    StyledCopyright
} from './styles';
import { HorizontalSocial } from '@components/common';



const Footer = () => {
    return (
        <StyledContainer>
            <StyledLogo>
                <LogoLight />
            </StyledLogo>
            <HorizontalSocial />
            <StyledCopyright>
                <span className="copytext">©{new Date().getFullYear()} - All rights reserved.</span> Made
                with <span className="heart">❤</span> by{' '}
                <Link to="/about" target="_blank" rel="noopener">
                        Thong Ba Nguyen
                </Link>
            </StyledCopyright>
        </StyledContainer>
    )
};

export default Footer;