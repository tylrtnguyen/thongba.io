import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

const About = () => {
    console.log(data.file.childImageSharp.fixed);
    return (
        <div>
        <h1>About Thong</h1>
        <Img fixed={data.file.childImageSharp.fixed} />
        </div>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "src/images/profile.jpg"}) {
            childImageSharp{
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default About;