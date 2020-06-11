import React from "react";
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const AboutPage = ({data}) => {
    return (
        <Layout>
            <Main>
                <SEO title="About" />
                <Title text="About me"></Title>
            </Main>
        </Layout>
    )
}

export default AboutPage
