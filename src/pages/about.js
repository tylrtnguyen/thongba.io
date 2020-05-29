import React from "react";
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const AboutPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="About" />
                <Title text="About me"/>
            </Main>
        </Layout>
    )
}

export default AboutPage