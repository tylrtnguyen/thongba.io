import React from 'react'
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const WorkPage = () => {
    return (
        <Layout>
            <Main> 
                <SEO title="Work" location="/work" />
                <Title text="Work Page"/>
            </Main>
        </Layout>
    )
}

export default WorkPage