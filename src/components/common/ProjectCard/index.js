import React from 'react';
import {
    StyledContainer,
    StyledCard,
    StyledCardHeader,
    StyledThumbnail,
    StyledCardBody,
    StyledButtonContainer,
    StyledDescription,
    StyledButton,
    StyledTitle,
    StyledTagContainer
} from './styles'
import { FormattedIcon } from '@icons';
import { Tag } from '@components/common';

const ProjectCard = ({ data }) => {
    const { frontmatter, html } = data.node;
    const { title, github, external, thumbnail, tags } = frontmatter;
    return (
        <StyledContainer>
            <StyledCard>
                <StyledCardHeader>
                    <StyledThumbnail fluid={thumbnail.childImageSharp.fluid} objectFit="cover" alt="Project Thumbnail" />
                </StyledCardHeader>
                <StyledTagContainer>
                    {tags && tags.map((tag, i) => <Tag key={i} tag={tag}/>)}
                </StyledTagContainer>
                <StyledCardBody>
                <StyledTitle>{title}</StyledTitle>
                    <StyledDescription>
                        <div dangerouslySetInnerHTML={{ __html: html}} />
                    </StyledDescription>
                    <StyledButtonContainer>
                        {
                            github && (
                                <StyledButton
                                    href={github}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="Github Link"
                                >
                                    <FormattedIcon name="GitHub"/>
                                </StyledButton>
                            )
                        }
                        {
                            external && (
                                <StyledButton
                                    href={external}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <FormattedIcon name="External"/>
                                </StyledButton>
                            )
                        }
                    </StyledButtonContainer>
                </StyledCardBody>
            </StyledCard>
        </StyledContainer>
    )
}

export default ProjectCard;