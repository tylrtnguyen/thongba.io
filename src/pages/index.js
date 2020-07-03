import React from "react";
import { Layout } from '@components/common';
import { Intro } from '@components/landing';
import { SocialMedia } from '@components/landing';
import Main from '@templates/Main';
import About from '@components/about';
import Portfolio from '@components/portfolio';



const IndexPage = () => {
    return (
            <Layout>
                <Main className="fillHeight">
                    <SocialMedia />
                    <Intro />
                    <About paddingTop="100px"/>
                    <Portfolio />
                </Main>
            </Layout> 
    )
}

export default IndexPage
