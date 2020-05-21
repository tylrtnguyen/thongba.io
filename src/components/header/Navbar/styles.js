import styled from 'styled-components'
import { theme, mixins, media } from '@templates'
const { colors, navHeight } = theme;

export const StyledContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0 100px;
    background-color: ${colors.danteWhite};
    z-index: 11;
    width: 100%;
    height: ${navHeight};
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

export const StyledBrand = styled.h1` 
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 84px;
    padding: 20px;
    color: ${colors.black};
    ${media.tablet`padding: 10px;`}
    ${media.phone`font-size:30px`}
`