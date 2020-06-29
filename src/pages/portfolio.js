import React from 'react'
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const PortfolioPage = () => {
    return (
        <Layout>
            <Main> 
                <SEO title="Portfolio" location="/portfolio" />
                <Title text="Portfolio Page"/>
            </Main>
        </Layout>
    )
}

export default PortfolioPage