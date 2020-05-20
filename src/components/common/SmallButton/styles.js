import styled from 'styled-components';
import { theme } from '@templates';
const { colors, fontSizes, fonts } = theme;

export const StyledButton = styled.button`
    color: ${colors.powderBlue};
    background-color: transparent;
    border: 1px solid ${colors.powderBlue};
    border-radius: ${theme.borderRadius};
    font-family: ${fonts.Montserrat};
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