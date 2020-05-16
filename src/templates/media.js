import { css } from 'styled-components'

// Inspired by Brittany Chiang @ https://github.com/bchiang7

const sizes = {
    giant: 1440,
    bigDesktop: 1200,
    desktop: 1000,
    tablet: 768,
    thone: 600,
    phablet: 480,
    phone: 376,
    tiny: 330
};


// iterate through the sizes and create a media template using em unit
// Since safari doesn't support the px in media well enough. Using em unit is a better choice
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)}
        }
    `;
    return accumulator;
}, {})

export default media