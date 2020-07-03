import styled from 'styled-components';
import { theme, media, mixins, Section } from '@templates';
const { colors, fontSizes } = theme;

export const StyledContainer = styled(Section)`
    padding: 120px 0 150px 0;
    position: relative;
    display: flex;
`;

export const StyledTabs = styled.div`
    display: flex;
    padding-right: 100px;
    align-items: flex-start;
    position: relative;
    ${media.thone`display: none;`}
`;

export const StyledGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`
export const StyledHeading = styled.h1`
    font-size: ${fontSizes.h3};
    padding-bottom: 10px;
`

export const StyledTabList = styled.ul`
    display: block;
    position: relative;
    width: max-content;
    z-index: 3;
    padding: 0;
    list-style: none;

    ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
    `};

    li {
    &:first-of-type {
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;

export const StyledTabButton = styled.button`
    ${mixins.link};
    display: flex;
    align-items: center;
    font-size: ${fontSizes.sm};
    width: 100%;
    background-color: transparent;
    height: ${theme.tabHeight}px;
    padding: 0 20px 2px;
    transition: ${theme.transition};
    border-left: 2px solid ${colors.powderBlue};
    color: ${props => (props.isActive ? colors.danteBlue : colors.danteBrown)};
    ${media.tablet`padding: 0 15px 2px;`};
    ${media.thone`
        ${mixins.flexCenter};
        padding: 0 15px;
        text-align: center;
        border-left: 0;
        border-bottom: 2px solid ${colors.lightestNavy};
        min-width: 120px;
    `};
    &:hover,
    &:focus {
        background-color: ${colors.hoverBlue};
        color: ${colors.danteWhite};
    }
`


