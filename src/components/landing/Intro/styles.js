import styled from 'styled-components';
import { BigButton } from '@components/common';
import { theme, mixins, media, Section } from '@templates';
const { colors, fontSizes, fonts, borderRadius } = theme;


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
    font-size: 68px;
    line-height: 1.1;
    color: ${colors.danteBrown};
    margin: 0;
    ${media.desktop`font-size: 60px;`};
    ${media.tablet`font-size: 50px;`};
    ${media.phablet`font-size: 40px;`};
    ${media.phone`font-size: 30px;`};
`;

export const StyledRole = styled.h3`
    font-size: 56px;
    line-height: 1.1;
    color: ${colors.danteBlue};
    ${media.desktop`font-size: 50px;`};
    ${media.tablet`font-size: 50px;`};
    ${media.phablet`font-size: 30px;`};
    ${media.phone`font-size: 25px;`};
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
    border-radius: ${borderRadius};
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
      box-shadow: rgba(184, 219, 217, 0.9) 0px 13px 19px -6px;
    }
    &:after {
      display: none !important;
    }
    margin-top: 50px;
    ${media.phone`margin-top: 15px; padding: 0.9rem 1.75rem;`}
`

export const StyledMagicalButton = styled.a`
    color: ${colors.white};
    text-decoration: none;
    font-size: ${fontSizes.lg};
    font-weight: 600;
    padding: 1.25rem 1.75rem;
    background: #00c3ff;
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: 0.5s;
    ${media.phone`
        width: 80%;
        margin: 0 auto;
        text-align: center;
    `};
    &:hover {
        box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
        transition: 0.5s;
    }
    &:first-child {
    margin-right: 1rem;
    background: #f9f9f9;
    color: #00c3ff;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;
    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(185, 185, 185, 0.4);
    }
    ${media.phone`margin: 0 auto 1.5rem auto;`};
  }
`

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    ${media.phone`flex-direction: column;`}
`

