import styled from 'styled-components';
import { theme, mixins, media } from '@templates';
import Img from 'gatsby-image';
const { colors, navHeight, navScrollHeight } = theme;

export const StyledContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0 100px;
    background-color: ${colors.danteWhite};
    z-index: 11;
    width: 100%;
    height: ${props => (props.scrollDirection === 'none' ? navHeight : navScrollHeight)};
    box-shadow: ${props => props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.danteBrown}` : 'none'};
    transform: translateY(${props => (props.scrollDirection === 'down' ? `-${navScrollHeight}` : '0px')})
    ${media.desktop`padding: 0 40px;`};
    ${media.tablet`padding:0 25px;`};
`;

export const StyledNav = styled.nav`
    ${mixins.flexBetween};
    position: relative;
    width: 100%;
    color: ${colors.black};
    font-weight: 600;
    font-family: Montserrat;
    z-index: 12;
`;

export const StyledLogo = styled.div` 
    ${mixins.flexCenter};
    a {
    display: block;
    width: 64px;
    height: 64px;
  }
`;


