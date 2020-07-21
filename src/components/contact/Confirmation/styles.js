import styled from 'styled-components';
import { theme, Section, media, mixins } from '@templates';
import { Link } from 'gatsby';
const { colors, fontSizes } = theme;

export const StyledContainer = styled(Section)`
    ${mixins.flexBetween};
    padding: 150px 150px;
    box-sizing: border-box;
    flex-direction: column;
`

export const StyledIcon = styled.div`
    position: relative;
`

export const StyledHeader = styled.h2`
    color: ${colors.charcoal};
    font-size: 50px;
    font-family: Montserrat-Bold;
    padding: 0.8rem 1rem;
    ${media.tablet`font-size:${fontSizes.h3}`}
    ${media.thone`font-size:${fontSizes.lg}`}
`

export const StyledBody = styled.p`
    color: ${colors.danteBrown};
    font-size: ${fontSizes.md};
    font-family: Montserrat-Regular;
    text-align: center;
    padding-bottom: 0.6rem;
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
    font-family: Montserrat-Regular;
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