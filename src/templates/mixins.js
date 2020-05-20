import { css } from 'styled-components';
import media from './media';
import theme from './theme'
const { colors, fontSizes, fonts } = theme

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
      color: ${colors.powderBlue};
      outline: 0;
    }
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