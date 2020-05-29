import styled from 'styled-components';
import { theme, mixins, media } from '@templates';
import { Link } from 'gatsby';
const { fontSizes } = theme; 

export const StyledLink = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display: none;`};
`;

export const StyledList = styled.ul`
    ${mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
`

export const StyledListItem = styled.li`
    margin: 0 15px;
    position: relative;
    cursor: pointer;
    font-size: ${fontSizes.md};
    &:hover {
        transform: scale(1.1);
    }
`

export const StyledListLink = styled(Link)`
    padding: 12px 10px;
`