import React from "react";
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const AboutPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="About" location="/about" />
                <Title text="About me"/>
            </Main>
        </Layout>
    )
}

export default AboutPage