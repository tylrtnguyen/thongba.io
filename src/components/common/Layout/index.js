import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Head from '../Head';
import PropTypes from 'prop-types';
import { GlobalStyle, theme } from '@templates';
import { Social } from '@components/common';
import { NavBar } from '@components/header';

// Styling
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    author
                    description
                }
            }
        }
    `)
    return (    
        <div id="root">
            <GlobalStyle />
            <Head metadata={data.site.siteMetadata} />
            <StyledContent>
                <NavBar />
                <Social />
                {children}
            </StyledContent>
        </div>
        
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.object.isRequired,
}