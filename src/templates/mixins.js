import { css } from 'styled-components';
import media from './media';
import theme from './theme'
const { colors } = theme

const mixins = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.danteBlue};
      outline: 0;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.powderBlue};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.powderBlue};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.powderBlue} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.green};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,
}

export default mixins;