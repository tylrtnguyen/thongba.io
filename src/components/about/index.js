import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { github, srConfig } from '@config';
import sr from '@utils/sr';
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


const About = ({ paddingTop }) => {
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
    const revealContainer = useRef(null);
    useEffect(() => {
      if(typeof window !== 'undefined') {
        sr.reveal(revealContainer.current, srConfig());
      }
    }, [])

    return (
        <StyledContainer paddingTop={paddingTop} id="about" ref={revealContainer}>
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

About.propTypes = {
  paddingTop: PropTypes.string.isRequired,
}

export default About;