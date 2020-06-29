import styled from 'styled-components';
import { theme } from '@templates';
const { fontSizes } = theme;

export const StyledTag = styled.span`
    padding: 2px 10px;
    background: ${props => props.bg};
    color: ${props => props.color};
    font-size: ${fontSizes.xs};
    margin: 0;
    text-transform: uppercase;
`