import React from 'react'
import { Layout, SEO } from '@components/common';
import Main from '@templates/Main';
import Portfolio from '@components/portfolio';

const PortfolioPage = () => {
    return (
        <Layout>
            <Main> 
                <SEO title="Portfolio" location="/portfolio" />
                <Portfolio />
            </Main>
        </Layout>
    )
}

export default PortfolioPage