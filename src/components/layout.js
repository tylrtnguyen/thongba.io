import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Head from './head'
import PropTypes from 'prop-types';

// Styling
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
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
        <StyledContent>
            <Head metadata={data.site.siteMetadata} />
            {children}
        </StyledContent>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.object.isRequired,
}