import React from 'react';
import PropTypes from 'prop-types';
import {
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconFacebook,
    IconDay,
    IconNight,
    IconEmail,
    IconExternal,
    IconDefault,
    IconSend,
    IconSuccess
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
        case 'Mail':
            return <IconEmail />;
        case 'Day':
            return <IconDay />;
        case 'Night':
            return <IconNight />;
        case 'External':
            return <IconExternal />;
        case 'Send':
            return <IconSend />;
        case 'Success':
            return <IconSuccess />;
        default:
            return <IconDefault />;
    }
}

FormattedIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FormattedIcon;