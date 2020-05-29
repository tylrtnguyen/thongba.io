import React from "react";
import { Layout, SEO } from '@components/common';
import { Intro } from '@components/landing';
import { SocialMedia } from '@components/landing';
import Main from '@templates/Main';



const IndexPage = () => {
    return (
        <Layout>
            <SEO />
            <Main className="fillHeight">
                <SocialMedia />
                <Intro />
            </Main>
        </Layout>   
    )
}

export default IndexPage
