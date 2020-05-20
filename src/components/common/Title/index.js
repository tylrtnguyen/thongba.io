import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 48px;
    padding-top: 100px;
`

const Title = ({ text }) => (
    <StyledTitle>{text}</StyledTitle>
)

export default Title;