import React from 'react';
import LogoLight from '@images/logoLight';
import { Link } from 'gatsby';
import {
    StyledContainer,
    StyledIcon,
    StyledLogo,
    StyledSocial,
    StyledCopyright
} from './styles';
import { navLinks, socialMedia } from '@config'; 
import { FormattedIcon } from '@icons';


const Footer = () => {
    return (
        <StyledContainer>
            <StyledLogo>
                <LogoLight />
            </StyledLogo>
            <StyledSocial>
                {socialMedia.map(({name, url}, index) => (
                    <StyledIcon
                        key={index}
                        name={name}
                        href={url}
                        target="_bank"
                        rel="nofollow noopener noreferrer"
                        aria-label={name}
                    >
                        <FormattedIcon name={name}></FormattedIcon>
                    </StyledIcon>
                ))}
            </StyledSocial>
            <StyledCopyright>
                <span className="copytext">© {new Date().getFullYear()} - All rights reserved.</span> Made
                with <span className="heart">❤</span> by{' '}
                <Link to="/about" target="_blank" rel="noopener">
                        Thong Ba Nguyen
                </Link>
            </StyledCopyright>
        </StyledContainer>
    )
};

export default Footer;