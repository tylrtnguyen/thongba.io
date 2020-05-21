import styled from 'styled-components';
import { BigButton } from '@components/common';
import { theme, mixins, media, Section } from '@templates';
const { colors, fontSizes, fonts } = theme;


export const StyledContainer = styled(Section)`
    ${mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    ${media.tablet`padding-top: 150px;`};
    div {
        width: 100%;
    }
`;

export const StyledGreeting = styled.h1`
    color: ${colors.danteBrown};
    margin: 0 0 20px 3px;
    font-size: ${fontSizes.md};
    font-family: ${fonts.Pacifico};
    font-weight: normal;
    ${media.desktop`font-size: ${fontSizes.sm}`};
    ${media.tablet`font-size: ${fontSizes.smish}`};
`;

export const StyledName = styled.h2`
    font-size: 70px;
    line-height: 1.1;
    color: ${colors.danteBrown};
    margin: 0;
    ${media.desktop`font-size: 60px;`}
    ${media.tablet`font-size: 50px;`}
    ${media.phablet`font-size: 40px;`}
    ${media.phone`font-size: 30px;`}
`;

export const StyledRole = styled.h3`
    font-size: 70px;
    line-height: 1.1;
    color: ${colors.danteBlue};
    ${media.desktop`font-size: 60px;`};
    ${media.tablet`font-size: 40px;`};
    ${media.phablet`font-size: 50px;`};
    ${media.phone`font-size: 30px;`};
`;

export const StyledDescription = styled.div`
    margin-top: 25px;
    width: 70%;
    max-width: 500px;
    p {
        font-size: ${fontSizes.lg};
    }
    a {
        ${mixins.inlineLink};
    }
    ${media.phone`p {font-size: ${fontSizes.md}}`};
`

export const StyledButtonLink = styled.a`
    color: ${colors.danteBrown};
    background-color: transparent;
    border: 1px solid ${colors.danteBrown};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    margin-right: 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.Montserrat};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.powderBlue};
    }
    &:after {
      display: none !important;
    }
    margin-top: 50px;
`

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    ${media.phone`flex-direction: column;`}
`

