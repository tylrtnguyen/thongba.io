import React from 'react'
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const BlogPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="Blog" />
                <Title text="Recent articles"/>
            </Main>
        </Layout>
    )
}

export default BlogPage