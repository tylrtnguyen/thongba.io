import React from 'react';
import PropTypes from 'prop-types';
import {
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconFacebook,
    IconDay,
    IconNight
} from '@icons';

const FormattedIcon = ({name}) => {
    switch (name) {
        case 'GitHub':
            return <IconGithub />;
        case 'Instagram':
            return <IconInstagram />;
        case 'Linkedin':
            return <IconLinkedin />;
        case 'Facebook':
            return <IconFacebook />;
        case 'Day':
            return <IconDay />;
        case 'Night':
            return <IconNight />;
    }
}

FormattedIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FormattedIcon;