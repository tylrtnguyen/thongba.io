import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { siteKeywords, socialMedia, siteLanguage } from '@config';

import thumbnail from '@assets/images/thumbnail.png';
import appleIcon57x57 from '@assets/favicons/apple-touch-icon-57x57.png';
import appleIcon72x72 from '@assets/favicons/apple-touch-icon-72x72.png';
import appleIcon76x76 from '@assets/favicons/apple-touch-icon-76x76.png';
import appleIcon114x114 from '@assets/favicons/apple-touch-icon-114x114.png';
import appleIcon120x120 from '@assets/favicons/apple-touch-icon-120x120.png';
import appleIcon144x144 from '@assets/favicons/apple-touch-icon-144x144.png';
import appleIcon152x152 from '@assets/favicons/apple-touch-icon-152x152.png';
import appleIcon180x180 from '@assets/favicons/apple-touch-icon-180x180.png';
import favicon from '@assets/favicons/favicon.ico';
import favicon16x16 from '@assets/favicons/favicon-16x16.png';
import favicon32x32 from '@assets/favicons/favicon-32x32.png';
import androidIcon192x192 from '@assets/favicons/android-chrome-192x192.png';
import androidIcon512x512 from '@assets/favicons/android-chrome-512x512.png';


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
            <link rel="shortcut icon" href={favicon} />
            <link rel="canonical" href={siteUrl}/>

            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={siteKeywords} />
            <meta name="author" content={author} />
            <meta name="image" content={thumbnail} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLB)}</script>

            <meta property="og:url" content={siteUrl} />
            <meta property="og:site_name" content={title} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={`${siteUrl}${thumbnail}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="610" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content={siteLanguage} />

            <meta property="twitter:card" content="summary"/>
            <meta property="twitter:creator" content={author} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
            <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
            <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
            <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
            <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
            <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
            <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
            <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
            <link rel="icon" type="image/png" sizes="512x512" href={androidIcon512x512} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
            <meta name="light-theme-color" content="#FFFEFE" />
            <meta name="dark-theme-color" content="#1D2224" />
        </Helmet>
    );
}

export default SEO

SEO.propTypes = {
    props: PropTypes.object,
};
