import React from 'react';
import { socialMedia } from '@config';
import { SideBar } from '@components/common';
import { FormattedIcon } from '@assets/icons';
import { StyledList, StyledLink } from './styles'

const SocialMedia = () => (
    <SideBar orientation="left">
        <StyledList>
            {socialMedia &&
                socialMedia.map(({name, url}, index) => (
                    <li key={index}>
                        <StyledLink
                            href={url}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label={name}>
                        <FormattedIcon name={name} />
                        </StyledLink>
                    </li>
                ))
            }
        </StyledList>
    </SideBar>
);

export default SocialMedia;