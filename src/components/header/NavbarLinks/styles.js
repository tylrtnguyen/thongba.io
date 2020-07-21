import styled from 'styled-components';
import { theme, mixins, media } from '@templates';
import { Link } from 'gatsby';
const { fontSizes, colors } = theme; 

export const StyledLink = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display: none;`};
`;

export const StyledList = styled.ul`
    ${mixins.flexBetween};
    padding: 0 30px 0 0;
    margin: 0;
    list-style: none;
`

export const StyledListItem = styled.li`
    margin: 0 15px;
    position: relative;
    cursor: pointer;
    font-size: ${fontSizes.sm};
    font-weight: 600;
`

export const StyledListLink = styled(Link)`
    padding: 12px 10px;
    display: inline-block;
    ${props => props.activeLink ? `color: ${colors.hoverBlue}` : ``};
    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${colors.hoverBlue};
        transition: width .3s;
    }
    &:hover::after {
        width: 100%;
        transition: width .3s;
    }
`