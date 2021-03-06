import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';


export const StyledList = styled.ul` 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: center;

    &:after {
    content: '';
    display: block;
    width: 1px;
    height: 300px;
    margin: 0 auto;
  }
  li:last-of-type {
    margin-bottom: 45px;
  }
`;

export const StyledLink = styled(OutboundLink)`
  padding: 12px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 25px;
    height: 25px;
  }
`

