import React from 'react'
import { Layout, Title, SEO } from '@components/common';
import Main from '@templates/Main';

const ContactPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="Contact Me" location="/contact" />
                <Title text="Contact me" />
            </Main>
        </Layout>
    )
}

export default ContactPage