import React from 'react'
import {
    StyledContainer,
    StyledIcon,
    StyledHeader,
    StyledBody,
    StyledBackButton
} from './styles';
import { FormattedIcon } from '@icons'

const Confirmation = () => (
    <StyledContainer>
        <StyledIcon>
            <FormattedIcon name="Success" />
        </StyledIcon>
        <StyledHeader>Thanks for reaching out!</StyledHeader>
        <StyledBody>Your message just showed up in my inbox. Talk to you soon!</StyledBody>
        <StyledBackButton to="/">BACK TO HOME</StyledBackButton>
    </StyledContainer>
)

export default Confirmation;