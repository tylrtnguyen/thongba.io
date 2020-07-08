import React from 'react'
import { Layout, SEO } from '@components/common';
import Main from '@templates/Main';
import { ContactForm } from '@components/contact';

const ContactPage = () => {
    return (
        <Layout>
            <Main>
                <SEO title="Contact" />
                <ContactForm />
            </Main>
        </Layout>
    )
}

export default ContactPage