import { css } from 'styled-components';
import { colors, fonts } from './theme';
import media from './media';

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
    `
}
