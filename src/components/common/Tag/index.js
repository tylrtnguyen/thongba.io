import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledTag } from './styles';

const Tag = ({ tag }) => {
    const { tags: { edges } } = useStaticQuery(graphql`
        query {
            tags: allTagsYaml {
                edges {
                    node {
                        title
                        bg
                        color
                    }
                }
            }
        }
    `)
    const { node: {bg, color, title }, } = edges.find(({ node: { title } }) => title === tag)
    return (
        <StyledTag bg={bg} color={color}>
            {title}
        </StyledTag>
    )
}

Tag.propTypes = {
    tag: PropTypes.string,
}

export default Tag;