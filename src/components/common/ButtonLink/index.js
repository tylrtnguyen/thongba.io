import styled from 'styled-components';
import { theme, media } from '@templates';
const { colors, fonts, fontSizes } = theme;

const ButtonLink = styled.a`
    color: ${colors.danteBrown};
    background-color: transparent;
    border: 1px solid ${colors.danteBrown};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    margin-right: 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.OpenSans};
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

export default ButtonLink;