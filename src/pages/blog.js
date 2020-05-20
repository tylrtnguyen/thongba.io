import React from 'react'
import { Layout, Title } from '@components/common';
import Main from '@templates/Main';

const BlogPage = () => {
    return (
        <Layout>
            <Main>
                <Title text="Recent articles"/>
            </Main>
        </Layout>
    )
}

export default BlogPage