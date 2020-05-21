import React from 'react';
import styled from 'styled-components';
import { theme } from '@templates';
const { colors } = theme;

const StyledTitle = styled.h1`
    font-size: 48px;
    padding-top: 100px;
    color: ${colors.black};
`

const Title = ({ text }) => (
    <StyledTitle>{text}</StyledTitle>
)

export default Title;