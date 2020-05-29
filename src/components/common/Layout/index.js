import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';
import PropTypes from 'prop-types';
import { GlobalStyle, theme } from '@templates';
import { NavBar } from '@components/header';

// Styling
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({children}) => {
    return (    
        <div id="root">
            <GlobalStyle />
            <StyledContent>
                <NavBar />
                {children}
            </StyledContent>
        </div>
        
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.object.isRequired,
}