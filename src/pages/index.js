import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Thong Nguyen ne</h1>
            <p>I'm a full stack developer</p>
        </Layout>   
    )
}

export default IndexPage
