import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { github } from '@config';
import {
  StyledContainer,
  StyledHeading,
  StyledFlexContainer,
  StyledContent,
  SkillsContainer,
  Skill,
  StyledAvatarContainer,
  StyledAvatar,
  StyledAvatarLink
} from './styles'


const About = () => {
    const data = useStaticQuery(graphql`
    query {
      about: allMarkdownRemark(filter: {fileAbsolutePath: { regex : "/about/" }}) {
        edges {
          node {
            frontmatter {
              title
              avatar {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
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
    `)
    // Destructure from the query results
    const { frontmatter, html } = data.about.edges[0].node;
    const { title, skills, avatar } = frontmatter;
    return (
        <StyledContainer>
        <StyledHeading>{title}</StyledHeading>
          <StyledFlexContainer>
            <StyledContent>
              <div dangerouslySetInnerHTML={{ __html: html}} />
              <SkillsContainer>
                {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
              </SkillsContainer>
            </StyledContent>
            <StyledAvatarContainer>
              <StyledAvatarLink href={github}>
              <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar"/>
              </StyledAvatarLink>
            </StyledAvatarContainer>
          </StyledFlexContainer>
        </StyledContainer>
    )
}


export default About;