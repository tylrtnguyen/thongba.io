import styled from 'styled-components';
import { theme, media  } from '@templates';
import Img from 'gatsby-image';
const { colors, fontSizes } = theme;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 60px;
    max-width: 100%;
    margin: auto;
    ${media.tablet`
                grid-template-columns: repeat(1fr); 
                justify-items: center;`};
`

export const StyledCard = styled.div`
    background-color: ${colors.danteWhite};
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	width: 300px;
`;

export const StyledThumbnail = styled(Img)`;
    width: 100%;
    height: 200px;
    position: relative;
    transition: ${theme.transition};
`;

export const StyledTagContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 1rem;

    span {
        margin: 0 1rem 1rem 0;

        &:last-child {
            margin: 0 0 1rem 0;
        }
    }
`;

export const StyledCardHeader = styled.div``;

export const StyledCardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px 20px;
    min-height: 250px;
`;

export const StyledTitle = styled.h4`
    margin: 10px 0;
`

export const StyledDescription = styled.div`
    font-size: ${fontSizes.md};
    margin: 0 0 40px;
`

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: -10px;
    color: ${colors.danteBrown};
`;

export const StyledButton = styled.a`
    position: relative;
    top: -10px;
    padding: 10px;
    svg {
        width: 32px;
        height: 32px;
    }
`;