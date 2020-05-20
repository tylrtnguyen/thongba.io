import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import favicon from '@icons/favicon.png'
import config from '@config'

const Head = ({ metadata }) => {
    return (
        <Helmet>
            <html lang="en" />
            <title>{metadata.title}</title>
            <link rel="icon" href={favicon}/>
            <link rel="canonical" href={metadata.siteUrl}/>

            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={config.siteKeywords} />
            <meta name="author" content={config.name} />
        </Helmet>
    );
}

export default Head

Head.propTypes = {
    metadata: PropTypes.object.isRequired,
};
