import React from 'react';
import styled from 'styled-components';
import { Layout, SEO } from '@components/common';
import Main from '@templates/Main';
import { theme, mixins, media } from '@templates';
import { ButtonLink } from '@components/common';
const { colors } = theme;

const StyledContainer = styled(Main)`
    ${mixins.flexCenter};
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    color: ${colors.danteBlue};
    font-family: Pacifico-Regular;
    font-size: 12vw;
    line-height: 1;
    ${media.bigDesktop`font-size: 200px;`};
    ${media.phablet`font-size: 120px;`};
`
const StyledSubTitle = styled.h2`
    color: ${colors.danteBrown};
    font-family: Montserrat-Regular;
    font-size: 3vw;
    font-weight: 400;
    ${media.bigDesktop`font-size: 50px;`};
    ${media.phablet`font-size: 30px;`};
`


const NotFoundPage = () => {
    return (
        <Layout>
            <StyledContainer>
                <SEO title="404" />
                <StyledTitle>404</StyledTitle>
                <StyledSubTitle>Page Not Found</StyledSubTitle>
                <ButtonLink to="/">Go Home</ButtonLink>
            </StyledContainer>      
        </Layout>
    )
}

export default NotFoundPage;