import React, { useEffect, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { 
    StyledContainer,
    StyledTabButton,
    StyledTabList,
    StyledTabs,
    StyledGrid,
    StyledHeading
} from './styles'
import { ProjectCard } from '@components/common';

const Portfolio = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark( filter: { fileAbsolutePath: {regex: "/portfolio/" }},
                                        sort: { fields: frontmatter___date, order: ASC }){
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            type
                            thumbnail {
                                childImageSharp {
                                    fluid(maxWidth: 400, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            github
                            external
                            tags
                        }
                        html
                    }
                }
            }
        }`);
    // Get all the projects from query result 
    // Data type: Array of objects
    const projects = data.allMarkdownRemark.edges;
    // Using Set to get a list of distinct types from the projects
    const categories = Array.from(new Set(projects.map(project => project.node.frontmatter.type)))
                                                .map(type => type)  
                                                
    // States                                     
    const [activeTabId, setActiveTabId] = useState('Web Development');
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([])

    const revealContainer = useRef(null);
    useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

    const focusTab = () => {
        if(tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
        } else {
            if (tabFocus >= tabs.current.length) {
                setTabFocus(0)
            }
            if (tabFocus < 0) {
                setTabFocus(tabs.current.length - 1);
            }
        }
    }

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus]);

    const onKeyPressed = e => {
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
            if (e.keyCode === 40) {
                setTabFocus(tabFocus + 1);
            } else if (e.keyCode === 38) {
                setTabFocus(tabFocus - 1);
            }
        }
    };

    return (
        <StyledContainer id="portfolio" ref={revealContainer}>
            <StyledTabs>
                <StyledTabList role="tablist" aria-label="Project topic tabs" onKeyDown={e => onKeyPressed(e)}>
                    <StyledHeading>Category</StyledHeading>
                    {
                        categories &&
                        categories.map((category, i) => {
                            return (
                                <li key={i}>
                                    <StyledTabButton
                                        isActive={activeTabId === i}
                                        onClick={() => setActiveTabId(category)}
                                        ref={el => (tabs.current[i] = el)}
                                        id={`${category}`}
                                        role="tab"
                                        aria-selected={activeTabId === i ? true : false}
                                        aria-controls={`panel-${i}`}
                                        tabIndex={activeTabId === i ? '0' : '-1'}
                                    >
                                        <span>{category}</span>
                                    </StyledTabButton>
                                </li>
                            )
                        })
                    }
                </StyledTabList>             
            </StyledTabs>
            <StyledGrid>
            <StyledHeading>Featured Projects</StyledHeading>
                    <div className="projects">
                        {projects &&
                        projects.filter(({node}) => node.frontmatter.type === activeTabId).map((node, i) => {
                            return (
                                <ProjectCard key={i} data={node}/>
                            );
                        })}
                    </div>
                </StyledGrid>
        </StyledContainer>
    )
}

export default Portfolio;



