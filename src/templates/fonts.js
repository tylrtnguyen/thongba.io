import { css } from 'styled-components'

const FontFaces = css`
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: fallback;
    font-weight: normal;
    src: url('./fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: fallback;
    font-weight: 600;
    src: url('./fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: fallback;
    font-weight: 300;
    src: url('./fonts/Montserrat/Montserrat-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-display: fallback;
    font-weight: normal;
    src: url('./fonts/Pacifico/Pacifico-Regular.ttf') format('truetype');
}
`
export default FontFaces;