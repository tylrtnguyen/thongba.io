import styled from 'styled-components';
import { theme } from '@templates';
const { colors } = theme;

export const StyledList = styled.ul` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.black};
  }
  li:last-of-type {
    margin-bottom: 30px;
  }
`;

export const StyledLink = styled.a`
  padding: 12px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 22px;
    height: 22px;
  }
`

