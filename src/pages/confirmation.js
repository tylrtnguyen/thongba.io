import React from 'react'
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';
import { Confirmation } from '@components/contact';

const ConfirmationPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="Confirmation" />
                <Confirmation />
            </Main>
        </Layout>
    )
}

export default ConfirmationPage;