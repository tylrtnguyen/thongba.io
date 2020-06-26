import styled from 'styled-components';

export const StyledSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const StyledIcon = styled.a`
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