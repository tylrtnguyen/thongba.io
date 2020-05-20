import styled from 'styled-components';
import { theme, media } from '@templates';
const { colors } = theme;

const StyledContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'right' ? 'auto' : '40px')};
    z-index: 10;
    color: ${colors.ghostWhite};
    ${media.desktop`right: 25px;`};
    ${media.tablet`display: none;`};
`
export default StyledContainer;