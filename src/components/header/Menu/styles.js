import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme, media, mixins } from '@templates'
const { colors, transition, fontSizes } = theme;

export const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    transition: ${transition};
    display: none;
    ${media.tablet`display: block;`};
`

export const Sidebar = styled.aside`
    ${mixins.flexCenter};
    flex-direction: column;
    background-color: ${colors.danteWhite};
    padding: 50px;
    width: 50vw;
    height: 100%;
    position: relative;
    right: 0;
    margin-left: auto;
    font-family: 'Open Sans';
    box-shadow: -10px 0px 30px -15px ${colors.danteBrown};
    ${media.thone`padding: 25px;`};
    ${media.phablet`width: 75vw;`};
    ${media.tiny`padding: 10px;`};
`;

export const Nav = styled.nav`
    ${mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    text-align: center;
    color: ${colors.danteBrown};
`;

export const NavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
`

export const NavListItem = styled.li`
    margin: 0 auto 20px;
    position: relative;
    font-size: ${fontSizes.lg};
    ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.md};
    `};
    ${media.tiny`font-size: ${fontSizes.smish};`};
`

export const NavLink = styled(Link)`
    ${mixins.link};
    padding: 3px 20px 20px;
    width: 100%;
`