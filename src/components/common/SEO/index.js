import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { siteKeywords, socialMedia } from '@config';

const SEO = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    author
                    description
                    logo
                }
            }
        }
    `)
    
    // Prep data for SEO
    const { image, location, description, isPost } = props;
    const title = props.title === undefined ? data.site.siteMetadata.title : `${props.title} | Thong Ba Nguyen`;
    const ogImage = image || data.site.siteMetadata.logo;
    const siteUrl = data.site.siteMetadata.siteUrl;
    const defaultDescription = data.site.siteMetadata.description;
    const metaDescription = description || defaultDescription;
    const author = data.site.siteMetadata.author;

    // Prep data for blog post
    const schemaOrgJSONLB = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            sameAs: [ 
                // GitHub
                socialMedia[0].url,
                // Linkedin
                socialMedia[1].url,
                // Facebook
                socialMedia[2].url,
                // Instagram
                socialMedia[3].url    
            ],
            url: siteUrl,
            name: title,
            alternateName: metaDescription
        }
    ];

    if(isPost) {
        schemaOrgJSONLB.push([
            {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                sameAs: [ 
                    // GitHub
                    socialMedia[0].url,
                    // Linkedin
                    socialMedia[1].url,
                    // Facebook
                    socialMedia[2].url,
                    // Instagram
                    socialMedia[3].url    
                ],
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        item: {
                            '@id': siteUrl,
                            name: title,
                            image: image
                        }
                    }
                ]
            },
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                sameAs: [ 
                    // GitHub
                    socialMedia[0].url,
                    // Linkedin
                    socialMedia[1].url,
                    // Facebook
                    socialMedia[2].url,
                    // Instagram
                    socialMedia[3].url    
                ],
                url: siteUrl,
                name: title,
                alternateName: `${location} | Thong Ba Nguyen`,
                headline: title,
                image: {
                    '@type': 'ImageObject',
                    url: image,
                },
                metaDescription,
            },
        ])
    }


    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <link rel="canonical" href={siteUrl}/>

            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={siteKeywords} />
            <meta name="author" content={author} />
            <meta name="image" content={ogImage} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLB)}</script>

            <meta property="og:url" content={`${siteUrl}/${location}/?ref=thongba.io`} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" conten={ogImage} />

            <meta property="twitter:card" content="summary"/>
            <meta property="twitter:creator" content={author} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Helmet>
    );
}

export default SEO

SEO.propTypes = {
    props: PropTypes.object,
};
