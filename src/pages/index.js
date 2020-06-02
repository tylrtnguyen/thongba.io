import React from "react";
import { Layout, SEO } from '@components/common';
import { Intro } from '@components/landing';
import { SocialMedia } from '@components/landing';
import Main from '@templates/Main';



const IndexPage = () => {
    return (
        <div>
            <SEO location="/" />
            <Layout>
            <Main className="fillHeight">
                <SocialMedia />
                <Intro />
            </Main>
            </Layout> 
        </div>
          
    )
}

export default IndexPage
