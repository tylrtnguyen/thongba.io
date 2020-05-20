import styled from 'styled-components'
import { theme, mixins, media } from '@templates'
const { colors } = theme;

export const StyledContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0 50px;
    background-color: #212121;
    z-index: 11;
    width: 100%;
    height: ${theme.navHeight};
    ${media.desktop`padding: 0 40px;`};
    ${media.tablet`padding:0 25px;`};
`;
export const StyledNav = styled.nav`
    ${mixins.flexBetween};
    position: relative;
    width: 100%;
    color: ${colors.ghostWhite};
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
    color: ${colors.ghostWhite};
    ${media.tablet`padding: 10px;`}
`