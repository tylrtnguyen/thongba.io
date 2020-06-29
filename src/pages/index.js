import React from "react";
import { Layout } from '@components/common';
import { Intro } from '@components/landing';
import { SocialMedia } from '@components/landing';
import Main from '@templates/Main';
import About from '@components/about';



const IndexPage = () => {
    return (
            <Layout>
                <Main className="fillHeight">
                    <SocialMedia />
                    <Intro />
                    <About paddingTop="100px"/>
                </Main>
            </Layout> 
    )
}

export default IndexPage
