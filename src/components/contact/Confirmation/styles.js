import styled from 'styled-components';
import { theme, Section, media } from '@templates';
import { Link } from 'gatsby';
const { fonts, colors, fontSizes } = theme;

export const StyledContainer = styled(Section)`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const StyledIcon = styled.div`
    position: relative;
`

export const StyledHeader = styled.h2`
    color: ${colors.charcoal};
    font-size: 48px;
    padding: 0.8rem 1rem;
    ${media.tablet`font-size:${fontSizes.h3}`}
    ${media.thone`font-size:${fontSizes.lg}`}
`

export const StyledBody = styled.p`
    color: ${colors.danteBrown};
    font-size: ${fontSizes.md};
    padding-bottom: 1rem;
    ${media.thone`font-size:${fontSizes.sm}`}
`

export const StyledBackButton = styled(Link)`
    background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
    color: ${colors.danteWhite};
    background-color: transparent;
    border-radius: 48px;
    padding: 1.25rem 1.75rem;
    margin-right: 1.75rem;
    font-size: ${fontSizes.md};
    font-family: ${fonts.OpenSans};
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