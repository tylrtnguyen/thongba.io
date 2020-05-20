import React from "react";
import { Layout } from '@components/common';
import { Intro } from '@components/landing';
import Main from '@templates/Main';



const IndexPage = () => {
    return (
        <Layout>
            <Main>
                <Intro />
            </Main> 
        </Layout>   
    )
}

export default IndexPage
