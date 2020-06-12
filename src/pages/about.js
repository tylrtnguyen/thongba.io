import React from "react";
import { Layout, Title, SEO } from '@components/common';
import { graphql } from 'gatsby';
import Main from '@templates/Main';

const AboutPage = ({ data }) => {
    console.log(data.about.edges[0].node.frontmatter.avatar.childImageSharp.fluid)
    return (
        <Layout>
            <Main>
                <SEO title="About" />
                <Title text="About me"></Title>
            </Main>
        </Layout>
    )
}

export const query = graphql`
{
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
    edges {
      node {
        frontmatter {
          title
          avatar {
            childImageSharp {
              fluid(maxWidth: 700, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          skills
        }
        html
      }
    }
  }
}
`

export default AboutPage
