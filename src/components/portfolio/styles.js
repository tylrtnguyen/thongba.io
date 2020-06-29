import styled from 'styled-components';
import { theme, media, mixins, Section } from '@templates';
const { colors, fontSizes } = theme;

export const StyledContainer = styled(Section)`
    position: relative;
`;

export const StyledTabs = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    ${media.thone`display: block;`}
`;

export const StyledTabList = styled.ul`
    display: block;
    position: relative;
    width: max-content;
    z-index: 3;
    padding: 0;
    margin: 0;
    list-style: none;

    ${media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
    `};
    ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
    `};

    li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
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
    }
`


