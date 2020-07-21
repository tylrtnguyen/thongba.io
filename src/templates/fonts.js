import { css } from 'styled-components'
import MontserratRegular from '@fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratMedium from '@fonts/Montserrat/Montserrat-Medium.ttf';
import MontserratSemiBold from '@fonts/Montserrat/Montserrat-SemiBold.ttf';
import MontserratBold from '@fonts/Montserrat/Montserrat-Bold.ttf';
import PacificoRegular from '@fonts/Pacifico/Pacifico-Regular.ttf';

const FontFaces = css`
    @font-face {
    font-family: Montserrat-Regular;
    src: url(${MontserratRegular});
}

@font-face {
    font-family: Montserrat-Medium;
    src: url(${MontserratMedium});
}

@font-face {
    font-family: Montserrat-SemiBold;
    src: url(${MontserratSemiBold});
}

@font-face {
    font-family: Montserrat-Bold;
    src: url(${MontserratBold});
}

@font-face {
    font-family: Pacifico-Regular;
    font-style: normal;
    font-weight: normal;
    src: url(${PacificoRegular});
}
`
export default FontFaces;