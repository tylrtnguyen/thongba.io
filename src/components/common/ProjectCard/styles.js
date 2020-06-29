import styled from 'styled-components';
import { theme, media  } from '@templates';
import Img from 'gatsby-image';
const { colors, fontSizes } = theme;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 30px;
    width: 940px;
    max-width: 100%;
    margin: auto;
    ${media.tablet`grid-template-columns: 1fr;`};
`

export const StyledCard = styled.div`
    background-color: ${colors.danteWhite};
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	width: 300px;
`;

export const StyledThumbnail = styled(Img)`;
    width: 100%;
    height: 200px;
    object-fit: cover;
`;
export const StyledTags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 0;

    span {
        margin: 0 1rem 1rem 0;
        color: #FFF;

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
    padding: 20px;
    min-height: 250px;
`;

export const StyledTitle = styled.h4`
    margin: 10px 0;
`

export const StyledDescription = styled.p`
    font-size: ${fontSizes.smish};
    margin: 0 0 40px;
`

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${colors.danteBrown};
    a {
        padding: 10px;
        svg {
            width: 32px;
            height: 32px;
        }
    }
`;

export const StyledButton = styled.button``;