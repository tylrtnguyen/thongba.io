import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '@templates';
import { NavBar } from '@components/header';
import Footer from '../../footer/index'
import SEO from '../SEO';

// Styling
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({children}) => {
    return (    
        <div id="root">
            <SEO location="/" />
            <GlobalStyle />
            <StyledContent>
                <NavBar />
                    {children}
                <Footer />
            </StyledContent>
        </div>
        
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.object.isRequired,
}