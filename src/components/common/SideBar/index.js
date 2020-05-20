import React from 'react'
import PropTypes from 'prop-types';
import StyledContainer from './styles';

const SideBar = ({children, orientation}) => {
    return (
        <StyledContainer orientation={orientation}>
            {children}
        </StyledContainer>
    )
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string.isRequired
}

export default SideBar;