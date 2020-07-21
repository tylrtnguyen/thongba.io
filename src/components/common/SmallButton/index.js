import styled from 'styled-components';
import { theme } from '@templates';
const { colors, fontSizes } = theme;

const SmallButton = styled.button`
    color: ${colors.powderBlue};
    background-color: transparent;
    border: 1px solid ${colors.powderBlue};
    border-radius: ${theme.borderRadius};
    font-family: Montserrat-Regular;
    font-size: ${fontSizes.smish};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
        background-color: ${colors.powderBlue};
    }
    &:after {
      display: none !important;
    }
`

export default SmallButton;