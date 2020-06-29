import React from "react";
import { Layout, SEO } from '@components/common';
import Main from '@templates/Main';
import { SocialMedia } from '@components/landing';
import About from '@components/about';

const AboutPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="About" />
                <SocialMedia />
                <About paddingTop="120px" />
            </Main>
        </Layout>
    )
}



export default AboutPage
