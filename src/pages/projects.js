import React from 'react'
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const ProjectPage = () => {
    return (
        <Layout>
            <Main> 
                <SEO title="Project" />
                <Title text="Project page"/>
            </Main>
        </Layout>
    )
}

export default ProjectPage