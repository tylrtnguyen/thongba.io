import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { trackCustomeEvent } from 'gatsby-plugin-google-analytics';
import {
    StyledContainer,
    StyledGreeting,
    StyledName,
    StyledRole,
    StyledDescription,
    StyledButtonContainer,
    StyledButtonLink
} from './styles'

const Intro = () => {

    const btnResumeTrack = (e) => {
      e.preventDefault();
      trackCustomeEvent({
        category: "View Resume Button",
        action: "click",
        label: "Gatsby Google Analytics View Resume Button"
      })
    }

    const btnSeeworkTrack = (e) => {
      e.preventDefault();
      trackCustomeEvent({
        category: "See Work Button",
        action: "click",
        label: "Gatsby Google Analytics See Work Button"
      })
    }
    // GraphQL Query
    const fetchData = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/landing/" } }) {
              edges {
              node {
                frontmatter {
                  greeting
                  name
                  role
                  buttonResume
                  buttonSeeWork
                }
                html
              }
            }
        }
      }
    `)
    const data = fetchData.allMarkdownRemark.edges[0].node
    const { frontmatter, html } = data
    return (
        <StyledContainer>
            <StyledGreeting>{frontmatter.greeting}</StyledGreeting>
            <StyledName>{frontmatter.name}</StyledName>
            <StyledRole>{frontmatter.role}</StyledRole>
            <StyledDescription dangerouslySetInnerHTML={{__html: html}} />
            <StyledButtonContainer>
                <StyledButtonLink
                    href="/resume.pdf"
                    target="_blank"
                    onClick={e => btnResumeTrack(e)}
                    rel="nofollow noopener noreferrer">
                    <strong>{frontmatter.buttonResume}</strong>
                </StyledButtonLink>
                <StyledButtonLink href="/portfolio" onClick={e => btnSeeworkTrack(e)}>
                <strong>{frontmatter.buttonSeeWork}</strong></StyledButtonLink>
            </StyledButtonContainer>
        </StyledContainer>
    )
}

export default Intro