import styled from 'styled-components';
import { theme, mixins, media } from '@templates';
const { colors, navHeight, navScrollHeight, transition } = theme;

export const StyledContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 10px 50px;
    background-color: ${colors.danteWhite};
    transition: ${transition};
    z-index: 11;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    width: 100%;
    height: ${props => (props.scrollDirection === 'none' ? navHeight : navScrollHeight)};
    box-shadow: ${props => props.scrollDirection === 'down' ? `0 10px 20px -10px ${colors.danteBrown}` : 'none'};
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
    font-family: 'Open Sans';
    z-index: 12;
`;

export const StyledLogo = styled.div` 
    ${mixins.flexCenter};
    z-index: 2;
    a {
      display: block;
      width: 200px;
      height: 90px;
   };
   ${media.thone`a {
     width: 133px;
     height: 60px;
   };`};
`;

const ba = `
  transition: all 0.25s;
  position: absolute;
  content: '';
  left: 0;
  height: 2px;
  width: 30px;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.88);
`
const baExpanded = `
  transition: all 0.25s;
  top: 0;
`

export const NavbarToggler = styled.button`
  border-radius: 0;
  padding: 0;
  border: 0;
  width: 30px;
  height: 18px;
  top: 4px;
  position: relative;
  background: transparent;
  cursor: pointer;
  z-index: 100;
  &:focus {
    border: 0;
    outline-width: 0;
  }
  display:none;
  ${media.tablet`
    display: block;
  `}
  &.open {
    .burger-menu {
      background: transparent !important;
      transition: all 0.25s;
      &:after {
        ${baExpanded}
        transform: rotate(45deg);
      }
      &:before {
        ${baExpanded}
        transform: rotate(-45deg);
      }
    }
  }
  .burger-menu {
    ${ba}
    top: 8px;
    &:after {
      ${ba}
      content: '';
      position: absolute;
      top: -8px;
      left: 0;
    }
    &:before {
      ${ba}
      content: '';
      position: absolute;
      top: 8px;
      left: 0;
    }
  }
`


